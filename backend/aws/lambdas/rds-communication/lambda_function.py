import pymysql
from pymysql.cursors import Cursor
import traceback
import logging

#Configuration environment values
endpoint = 'aws-rds-db.cfrwh9mf3ygt.us-east-2.rds.amazonaws.com'
username = 'admin'
pwd = 'adminadmin'
database_name = 'TEST'

#Connection string build
connection = pymysql.connect(host=endpoint, user=username, password=pwd, database=database_name) 

def print_table(cursor: Cursor, table_name: str):
    cursor.execute(f"SELECT * FROM {table_name}")
    rows = cursor.fetchall()
    for row in rows:
        print(row)
        
def get_all_rows(cursor: Cursor, table_name: str):
    cursor.execute(f"SELECT * FROM {table_name}")
    return cursor.fetchall()
        
def safe_execute(response_obj):
    try:
        # cursor = connection.cursor()
        cursor = connection.cursor(pymysql.cursors.DictCursor)
        # print_table(cursor, "TBL1")
        # cursor.execute('INSERT INTO `TEST`.`TBL1` (`uid`, `name`, `count`) VALUES ("6", "test", "60")')
        print_table(cursor, "TBL1")
        response_obj['body'] = get_all_rows(cursor, "TBL1")
    except Exception as e:
        response_obj['statusCode'] = 500
        response_obj['body'] = {
            "msg": "There was an exception while executing lambda..."
        }
        print("There was an exception while executing lambda...")
        print ("EXCEPTION INFO:")
        logging.error(traceback.format_exc())
    finally:
        print("Closing lambda...")
        return response_obj
    

def lambda_handler(event, context):
    response_obj = {
        'statusCode': 200,
        'headers': {},
        'body': {}
    }
    # response_obj['headers'] = {
    #     'Access-Control-Allow-Headers': 'Content-Type',
    #     'Access-Control-Allow-Origin': '*',
    #     'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
    # }
    response_obj['headers']['Content-Type'] = 'application/json'
    response_obj['statusCode'] = 200
    response_obj = safe_execute(response_obj)
    return response_obj

lambda_handler(None, None)