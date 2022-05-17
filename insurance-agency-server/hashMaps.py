import dataAccess

FILE_PATH = 'D:\\py_proj\\insurance-agency-server\\Data_Set_Insurance_Client.csv'


def getHashMap(feild: str):
    hashmap: dict = {}

    # data:list=dataAccess.csv_to_json('D:\\py_proj\\insurance-agency-server\\Data_Set_Insurance_Client.csv')
    data: list = dataAccess.csv_to_json(FILE_PATH)

    for each in data:
        hashmap[each[feild]] = each

    return hashmap


def get_data_by_customer_id(id: str):
    # data:list=dataAccess.csv_to_json('D:\\py_proj\\insurance-agency-server\\Data_Set_Insurance_Client.csv')
    data: list = dataAccess.csv_to_json(FILE_PATH)
    new_data = []
    for each in data:
        if(each['customer_id'] == id):
            new_data.append(each)
    return new_data


def put_data_by_policy_id(newData, policy_id):
    data: list = dataAccess.csv_to_json(FILE_PATH)
    count = 0
    for each in data:
        if(each['policy_id'] == policy_id):
            data[count] = newData
        count = count+1

    dataAccess.json_to_csv(FILE_PATH, data)
    print(f'Policy with id {policy_id} is updated.')
