
import axios from "axios";
import { BarData, PolicyData } from "./Components/datamodels"



const instance = axios.create({
      baseURL: 'http://localhost:8000',
      timeout: 1000,
});

export const getSearchResults = async (searchBy: string, searchParam: string) => {
      var response = await instance.get(`/${searchBy}/${searchParam}`)
      if (!response.data[0]) {
            window.alert(`No data found.`)
            return
      }
      return response.data
}


export const updatePolicies = async (data: PolicyData) => {
      var res = await instance.put(`/policy_id/${data.policy_id}`, data)
      return res
}


export const getSalesData = async (region: string | 'North' | 'South' | 'East' | 'West') => {
      let res = await instance.get(`/monthlySalesData/${region}`)
      let sales:BarData[] = [
            {
                  name:'Jan' ,
                  sales: res.data['Jan'], 
            },
            {
                  name:'Feb' ,
                  sales: res.data['Feb'], 
            },
            {
                  name:'Mar' ,
                  sales: res.data['Mar'], 
            },
            {
                  name:'Apr' ,
                  sales: res.data['Apr'], 
            },
            {
                  name:'May' ,
                  sales: res.data['May'], 
            },
            {
                  name:'Jun' ,
                  sales: res.data['Jun'], 
            },
            {
                  name:'Jul' ,
                  sales: res.data['Jul'], 
            },
            {
                  name:'Aug' ,
                  sales: res.data['Aug'], 
            },
            {
                  name:'Sep' ,
                  sales: res.data['Sep'], 
            },
            {
                  name:'Oct' ,
                  sales: res.data['Oct'], 
            },
            {
                  name:'Nov' ,
                  sales: res.data['Nov'], 
            },
            {
                  name:'Dec' ,
                  sales: res.data['Dec'], 
            }

      ]

      return sales
}

export default updatePolicies