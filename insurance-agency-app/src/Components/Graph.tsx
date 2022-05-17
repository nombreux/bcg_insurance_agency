import { css } from '@emotion/css';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { BarChart, Bar, Tooltip, Legend, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { getSalesData } from '../api';
import { BarData } from './datamodels';



const Graph = ({ salesData }: {
      salesData: BarData[]
}) => {

      return (
            <div className={css({
                  marginLeft:'-50px'
            })}>
                  <>
                        <BarChart barSize={20} width={700} height={400} data={salesData}>
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="name" />
                              <YAxis />
                              <Tooltip />
                              <Legend />
                              <Bar dataKey="sales" fill="#8884d8" />
                        </BarChart>
                  </>

            </div>
      )
}


const SelectGraph = () => {

      const [searchRegion, setSearchRegion] = useState('')
      const [salesData, setSalesData] = useState(null)

      useEffect(() => {
            if (!(searchRegion === '')) {
                  
                  getSalesData(searchRegion)
                        // @ts-ignore
                        .then(res => setSalesData(res))
                        .catch(err=>setSalesData(null))
            }
      
      }, [searchRegion])
      
      return (
            <div className={css({
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '50px',
                  alignContent: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: '-5vw',
                  marginTop:'50px'
                  
                  
            })}>
                  <div className={css({
                        width:'48vw'
                  })}>

                        <FormControl fullWidth>
                              <InputLabel id="sales_data">Sales Data By Region</InputLabel>
                              <Select
                                    labelId="sales_data"
                                    label="Sales Data By Region"
                                    value={searchRegion}
                                    onChange={(event) => {
                                          setSearchRegion(event.target.value as string)
                                    }}
                              >
                                    <MenuItem value={'North'}>North - Sales Data</MenuItem>
                                    <MenuItem value={'South'}>South - Sales Data</MenuItem>
                                    <MenuItem value={'East'}>East - Sales Data</MenuItem>
                                    <MenuItem value={'West'}>West - Sales Data</MenuItem>
                              </Select>
                        </FormControl>
                  </div>
                  {
                        salesData
                              ? <Graph salesData={salesData} />
                              :null
                  }
            </div>
      )
}

export default SelectGraph