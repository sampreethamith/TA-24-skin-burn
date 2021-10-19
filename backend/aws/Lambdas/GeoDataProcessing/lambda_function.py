import json
from datetime import datetime, timedelta
import boto3
import os
import random
from urllib.parse import urlparse
from botocore.exceptions import ClientError

s3 = boto3.resource('s3')
lambda_client = boto3.client('lambda')
s3_bucket_name = 'skinburn-data-bucket'
invoke_lambda_fn_name = "arn:aws:lambda:us-east-2:102281328318:function:WeatherAPICall"
response_obj = {}
req_backlog_hours = 0
req_backlog_mins = 15


def set_error_msg(response_obj, message):
    return {
        'statusCode': 500,
        'headers': response_obj['headers'],
        'body': {
            'msg': message
        }
    }


def read_s3_object(name):
    try:
        file_obj = s3.Object(s3_bucket_name, name)
        file_content = file_obj.get()['Body'].read().decode('utf-8')
        data = json.loads(file_content)
        return data
    except ClientError as e:
        response_obj['statusCode'] = 500
        print("S3 Operation failed")
        print(e.response)
        return None


def write_to_s3(filename, json_data):
    file_obj = s3.Object(s3_bucket_name, filename)
    file_obj.put(Body=(bytes(json.dumps(json_data).encode('UTF-8'))))


def invoke_lambda(input_payload):
    response = lambda_client.invoke(
        FunctionName=invoke_lambda_fn_name,
        InvocationType='RequestResponse',
        Payload=json.dumps(input_payload)
    )
    return json.load(response['Payload'])


def retrive_weather_data(file_name, val_list):
    ow_geo_json_data = read_s3_object(file_name)
    if 'all' in val_list:
        filter_items = [item for name, item in ow_geo_json_data.items()]
    elif len(val_list) == 1 and val_list[0] not in ow_geo_json_data:
        return None
    else:
        filter_items = [ow_geo_json_data[name]
                        for name in val_list if name in ow_geo_json_data]
    # updatedtime <= request - 1hr  -> call
    request_time = datetime.today()
    global req_backlog_hours
    global req_backlog_mins
    backlog_timestamp = (
        request_time - timedelta(hours=req_backlog_hours, minutes=req_backlog_mins)).timestamp()
    for item in filter_items:
        print(f"updatedtime: {item['properties']['updatedtime']} <= backlog_timestamp: {backlog_timestamp}")
        if item['properties']['updatedtime'] <= backlog_timestamp:
            print('weather call has been made')
            response_from_child = invoke_lambda(
                {'lat': item['properties']['coord']['lat'], 'lon': item['properties']['coord']['lon']})
            item['properties']['uvi'] = response_from_child['uvi']
            item['properties']['updatedtime'] = datetime.today().timestamp()
            ow_geo_json_data[item['properties']['name']
                             ]['properties']['uvi'] = item['properties']['uvi']
            ow_geo_json_data[item['properties']['name']
                             ]['properties']['updatedtime'] = item['properties']['updatedtime']
    write_to_s3(file_name, ow_geo_json_data)
    return filter_items


def get_geo_weather_data(q, v, response_obj):
    q = q.lower()
    v = v.lower()
    val_list = v.split(",") if "," in v else [v]
    if 'all' in val_list and len(val_list) > 1:
        return set_error_msg(response_obj, "only one values accepted for query parameter's value if it has 'all' flag")
    if q == 'state':
        response_obj['body'] = retrive_weather_data(
            'state_with_geo.json', val_list)
        return response_obj
    elif q == 'city':
        if 'all' in val_list or len(val_list) > 5:
            return set_error_msg(response_obj, "you cannot retrive more than 5 cities at once.")
        response_obj['body'] = retrive_weather_data(
            'city_with_geo.json', val_list)
        return response_obj
    elif q == 'loc':
        if len(val_list) != 2:
            return set_error_msg(response_obj, "query parameter's value(s) are invalid.")
        city_data = invoke_lambda({
            'loc': {'lat': float(val_list[0]), 'lon': float(val_list[1])}
        })
        response_obj['body'] = retrive_weather_data(
            'city_with_geo.json', [city_data['name'].lower()])
        return response_obj
    else:
        return set_error_msg(response_obj, "query parameter's value(s) are invalid.")


def lambda_handler(event, context):
    response_obj = {
        'isBase64Encoded': True,
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        },
        'body': {}
    }
    # print(event)
    if "queryStringParameters" in event and "q" in event["queryStringParameters"] and "v" in event["queryStringParameters"]:
        response_obj = get_geo_weather_data(
            event["queryStringParameters"]['q'], event["queryStringParameters"]['v'], response_obj)
    else:
        response_obj = set_error_msg(
            response_obj, "query parameters are invalid.")
    # print(response_obj)
    response_obj['body'] = json.dumps(
        response_obj['body']) if response_obj['body'] is not None else ""
    # print(response_obj)
    return response_obj

# lambda_handler({
#     'queryStringParameters': {
#         'q': 'city',
#         'v': 'clayton'
#     }}, None)
# ?q:[state,city,loc]&v:[val1,val2,[all]]
