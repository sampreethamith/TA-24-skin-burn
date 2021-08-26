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
        
def safe_execute():
    try:
        cursor = connection.cursor()
        print_table(cursor, "TBL1")
        cursor.execute('INSERT INTO `TEST`.`TBL1` (`uid`, `name`, `count`) VALUES ("7", "test2", "70");')
        print_table(cursor, "TBL1")
    except Exception as e:
        print("There was an exception while executing lambda...")
        print ("EXCEPTION INFO:")
        logging.error(traceback.format_exc())
    finally:
        print("Closing lambda...")
    

def lambda_handler(event, context):
    safe_execute()

lambda_handler(None, None)