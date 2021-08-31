import os
import sys
import json
import requests
import time
# import pandas as pd
from datetime import datetime, date, timedelta, timezone


openweather_appid = '947c6e809cdbe01fcf3f6d54451666b3'
openweather_uv_url = 'https://api.openweathermap.org/data/2.5/onecall'
openweather_loc_url = 'http://api.openweathermap.org/geo/1.0/reverse'
openweather_unit = 'metric'


def build_uv_call(lati, longi, timestamp=None, excludes=None):
    if timestamp is None:
        timestamp = round(time.time())
    if excludes is None:
        excludes = 'daily,hourly,minutely'
    return {
        'lat': lati,
        'lon': longi,
        'units': openweather_unit,
        'exclude': excludes,
        'dt': timestamp,
        'appid': openweather_appid
    }


def build_location_call(lati, longi):
    return {
        'lat': lati,
        'lon': longi,
        'appid': openweather_appid
    }


def get_weather_params(response_obj):
    # make a weather call
    uv_result = requests.get(url=openweather_uv_url, params=build_uv_call(
        '-37.8934029959345', '145.04192503470648')).json()
    loc_result = requests.get(url=openweather_loc_url, params=build_location_call(
        '-37.8934029959345', '145.04192503470648')).json()
    del uv_result['minutely']
    del uv_result['hourly']
    del uv_result['daily']
    response_obj['body'] = {
        'uvi': uv_result['current']['uvi'],
        'loc_name': loc_result[0]['name']
    }


def set_error_msg(response_obj, message):
    return {
        'statusCode': 500,
        'headers': response_obj['headers'],
        'body': {
            'msg': message
        }
    }


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

    if "queryStringParameters" in event and "lat" in event["queryStringParameters"] and "lon" in event["queryStringParameters"]:
        response_obj = get_weather_params(response_obj)
    else:
        response_obj = set_error_msg(
            response_obj, "query parameters are invalid.")
    response_obj['body'] = json.dumps(response_obj['body'])
    print(response_obj)
    return response_obj


lambda_handler(None, None)
