import pandas as pd

from dataAccess import csv_to_json

FILE_PATH = 'D:\\py_proj\\insurance-agency-server\\Data_Set_Insurance_Client.csv'


def get_monthly_sales_data_by_region(region: str):

    dataDict = {}

    data: list = csv_to_json(FILE_PATH)

    for each in data:
        # count the purchases in each month
        if(each['date_of_Purchase'].find('Jan') != -1 and each['customer_region'] == region):
            try:
                dataDict['Jan'] = dataDict['Jan']+1
            except:
                dataDict['Jan'] = 1

        elif(each['date_of_Purchase'].find('Feb') != -1 and each['customer_region'] == region):
            try:
                dataDict['Feb'] = dataDict['Feb']+1
            except:
                dataDict['Feb'] = 1

        elif(each['date_of_Purchase'].find('Mar') != -1 and each['customer_region'] == region):
            try:
                dataDict['Mar'] = dataDict['Mar']+1
            except:
                dataDict['Mar'] = 1

        elif(each['date_of_Purchase'].find('Apr') != -1 and each['customer_region'] == region):
            try:
                dataDict['Apr'] = dataDict['Apr']+1
            except:
                dataDict['Apr'] = 1

        elif(each['date_of_Purchase'].find('May') != -1 and each['customer_region'] == region):
            try:
                dataDict['May'] = dataDict['May']+1
            except:
                dataDict['May'] = 1

        elif(each['date_of_Purchase'].find('Jun') != -1 and each['customer_region'] == region):
            try:
                dataDict['Jun'] = dataDict['Jun']+1
            except:
                dataDict['Jun'] = 1

        elif(each['date_of_Purchase'].find('Jul') != -1 and each['customer_region'] == region):
            try:
                dataDict['Jul'] = dataDict['Jul']+1
            except:
                dataDict['Jul'] = 1

        elif(each['date_of_Purchase'].find('Aug') != -1 and each['customer_region'] == region):
            try:
                dataDict['Aug'] = dataDict['Aug']+1
            except:
                dataDict['Aug'] = 1

        elif(each['date_of_Purchase'].find('Sep') != -1 and each['customer_region'] == region):
            try:
                dataDict['Sep'] = dataDict['Sep']+1
            except:
                dataDict['Sep'] = 1

        elif(each['date_of_Purchase'].find('Oct') != -1 and each['customer_region'] == region):
            try:
                dataDict['Oct'] = dataDict['Oct']+1
            except:
                dataDict['Oct'] = 1

        elif(each['date_of_Purchase'].find('Nov') != -1 and each['customer_region'] == region):
            try:
                dataDict['Nov'] = dataDict['Nov']+1
            except:
                dataDict['Nov'] = 1

        elif(each['date_of_Purchase'].find('Dec') != -1 and each['customer_region'] == region):
            try:
                dataDict['Dec'] = dataDict['Dec']+1
            except:
                dataDict['Dec'] = 1

    return dataDict
