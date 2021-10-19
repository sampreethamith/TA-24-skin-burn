import pymysql
from pymysql.cursors import Cursor
import traceback
import logging
import json

#Configuration environment values
endpoint = 'aws-rds-db.cfrwh9mf3ygt.us-east-2.rds.amazonaws.com'
username = 'admin'
pwd = 'adminadmin'
database_name = 'skinburn'

#Connection string build
connection = pymysql.connect(host=endpoint, user=username, password=pwd, database=database_name)


def make_query(cursor: Cursor, query: str):
    cursor.execute(query)
    return cursor.fetchall()
        
def safe_execute(response_obj):
    try:
        # cursor = connection.cursor()
        cursor = connection.cursor(pymysql.cursors.DictCursor)
        survival_rate_query = "SELECT CONCAT(CAST(ROUND(AVG(survival), 2) AS CHAR), '%') AS 'survival_rate' FROM survival_rate WHERE period LIKE '%2017' AND sex IN ('Males', 'Females') GROUP BY period;"
        death_incidence_query = "SELECT CAST(SUM(incidence_count) AS CHAR) AS incidence_count, CAST(SUM(mortality_count) AS CHAR) AS death_count FROM incidence_mortality_rate WHERE YEAR = 2017 AND sex IN ('Males', 'Females') GROUP BY YEAR;"
        survival_data = make_query(cursor, survival_rate_query)
        death_incidence_data = make_query(cursor, death_incidence_query)
        data_to_send = {**survival_data[0], **death_incidence_data[0]}
        # print(data_to_send)
        response_obj['body'] = data_to_send
    except Exception as e:
        response_obj = set_error_msg(response_obj, "There was an exception while executing lambda...")
        print("There was an exception while executing lambda...")
        print ("EXCEPTION INFO:")
        logging.error(traceback.format_exc())
    finally:
        print("Closing lambda...")
        return response_obj
    

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
    print(event)
    if "queryStringParameters" in event and "homedata" in event["queryStringParameters"]:
        response_obj = safe_execute(response_obj)
    else:
        response_obj = set_error_msg(response_obj, "query parameters are invalid.")
    response_obj['body'] = json.dumps(response_obj['body'])
    print(response_obj)
    return response_obj
