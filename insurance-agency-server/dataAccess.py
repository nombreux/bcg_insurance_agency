import csv 
import json 
import pandas as pd




def csv_to_json(csvFilePath):
      jsonArray = []

      #read csv file
      with open(csvFilePath, encoding='utf-8') as csvf: 
            #load csv file data using csv library's dictionary reader
            csvReader = csv.DictReader(csvf) 

            #convert each csv row into python dict
            for row in csvReader: 
            #add this python dict to json array
                  jsonArray.append(row)
    
      return jsonArray

def json_to_csv(filePathToCsv:str,jsonArray:list):
      try:  

            try:
                  df=pd.DataFrame(jsonArray)
                  df.to_csv(filePathToCsv,index=False)
            except:
                  print('cant load data to data frame')
      except:
            print('err')

      
