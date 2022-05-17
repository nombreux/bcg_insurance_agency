from typing import Union
from dataAnalysis import get_monthly_sales_data_by_region
from datamodels import ReqBody  # Customer_id
import hashMaps
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost:3000",
    "http://localhost:8080",
]

app.add_middleware(CORSMiddleware,
                   allow_origins=origins,
                   allow_credentials=True,
                   allow_methods=["*"],
                   allow_headers=["*"],)


@app.get("/")
async def read_root():
    return hashMaps.getHashMap('policy_id')


@app.get("/policy_id/{id}")
async def get_policy_by_id(id: str):
    return [hashMaps.getHashMap('policy_id')[f'{id}']]


@app.get("/customer_id/{id}")
async def get_policy_by_customer_id(id: str):
    try:
        return hashMaps.get_data_by_customer_id(id)
    except KeyError:
        return {False}


@app.put("/policy_id/{id}")
async def edit_policy(id: str, data: ReqBody):
    try:
        hashMaps.put_data_by_policy_id(data.dict(), id)
        return {True}
    except:
        return {False}


@app.get("/monthlySalesData/{region}")
async def getSalesData(region: str):
    print(region)
    dat = get_monthly_sales_data_by_region(f'{region}')
    print(dat)
    return dat
