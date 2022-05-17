import { css } from '@emotion/css'
import styled from '@emotion/styled'
import { Input } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { PolicyData } from './datamodels'
import updatePolicies from '../api'


const DataDisplayFlex = styled.div({
      marginTop: '50px',
      marginLeft: '-5vw',
      display: 'flex',
      flexDirection: 'column',
      alignItems: '',
      minWidth: '35vw',
      padding: '10px',
      gap: '5px',
      border: '1px solid #E5E5E5',
      borderRadius: '5px'
})

const DataItemRow = styled.div({
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderBottom: '1px solid #E5E5E5',
      borderRadius: '5px',
      alignItems: 'center',
      fontFamily: 'League Spartan',
      color: '#4F4F4F'


})

const Value = styled.div({
      display: 'flex',
      flexDirection: 'row',
      gap: '20px',
      alignItems: 'center'

})

const Key = styled.div({
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: '10px'

})

const Button = styled.button({
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      // height: '100%',
      width: '100%',
      padding: '10px',
      background: '#F7F7F7',
      border: '1px solid #DDDDDD',
      borderRadius: '5px',
      fontFamily: 'inherit',
      fontSize: '1rem',
      fontWeight: '500',
      color: '#666666',
      ':hover': {
            cursor: 'pointer',
            transform: 'scale(1.02)',
            transitionDuration: '0.2s'


      },
      ':active': {
            transform: 'scale(0.98)',
            transitionDuration: '0.2s'
      }
})

const DataRows = ({ data, keyy, value, label, isSaved, showSave, setNewData }: {
      keyy: string,
      value: string,
      isSaved: boolean,
      data: PolicyData,
      label: string
      setNewData: (val: PolicyData) => void
      showSave: (val: boolean) => void


}) => {

      const [edit, setEdit] = useState(true)
      const [cellValue, setCellValue] = useState(value)

      useEffect(() => {

            if (isSaved) {
                  setEdit(false)
            }
            else {
                  setEdit(true)
            }

            return () => {

            }
      })



      return (
            <DataItemRow>
                  <Key>
                        {label}
                  </Key>
                  <Value>
                        <Input disabled={edit} value={cellValue} onChange={(e) => {

                              if (!(keyy === 'date_of_Purchase')) {  

                                    let g = String(e.target.value)
                                    setCellValue(g)
                                    // @ts-ignore
                                    data[keyy] = g;
                                    setNewData(data);
                              }
                              else {
                                    window.alert('You can not edit this.')  
                              }

                              if(keyy === 'premium'){
                                    let g = String(e.target.value)

                                    if (Number(g) < 1000001) {
                                          
                                          setCellValue(g)
                                          // @ts-ignore
                                          data[keyy] = g;
                                          setNewData(data); 
                                    }
                                    else {
                                          window.alert('Premium can not be more than 1 Million')
                                          g='1000000'                                          
                                          setCellValue(g)
                                          // @ts-ignore
                                          data[keyy] = g;
                                          setNewData(data); 
                                          
                                    }
                              }
                              

                        }} />
                        <button
                              onClick={() => {
                                    if (!(keyy === 'date_of_Purchase')) {                                          
                                          setEdit(false)
                                          showSave(true)
                                    }
                              }}
                        >
                              <img src="https://img.icons8.com/ios/15/000000/edit--v1.png" alt='' />
                        </button>
                  </Value>
            </DataItemRow>
      )
}

const DataDisplayCards = ({ policyData }: {
      policyData: PolicyData
}) => {
      const [save, setSave] = useState(false)
      const [policy_data, setPolicyData] = useState(policyData)
      useEffect(() => {

            if (policy_data.policy_id !== policyData.policy_id) {
                  console.log('in if blk')
                  setPolicyData(policyData)
            }
            console.log(policy_data)
      
      })
      

      // console.log(policyData)
      return (
            <DataDisplayFlex>
                  <DataRows key={1} value={policy_data.policy_id} keyy='policy_id' label='PolicyId' data={policy_data} isSaved={save} showSave={setSave} setNewData={setPolicyData} />
                  <DataRows key={2} value={policy_data.customer_id} keyy='customer_id' label='CustomerId' data={policy_data} isSaved={save} showSave={setSave} setNewData={setPolicyData} />
                  <DataRows key={3} value={policy_data.date_of_Purchase} keyy='date_of_Purchase' label='Purchase Date'  data={policy_data} showSave={setSave} isSaved={save} setNewData={setPolicyData} />
                  <DataRows key={4} value={policy_data.fuel} keyy='fuel' label='Fuel' data={policy_data} isSaved={save} setNewData={setPolicyData} showSave={setSave}/>
                  <DataRows key={5} value={policy_data.vehicle_segment} keyy='vehicle_segment' label='Vehicle Segment' data={policy_data} isSaved={save} showSave={setSave} setNewData={setPolicyData} />
                  <DataRows key={6} value={policy_data.premium} keyy='premium' label='Premium' data={policy_data} isSaved={save} setNewData={setPolicyData} showSave={setSave}/>
                  <DataRows key={7} value={policy_data.bodily_injury_liability} keyy='bodily_injury_liability' label='Body Injury Liability' data={policy_data} showSave={setSave} isSaved={save} setNewData={setPolicyData} />
                  <DataRows key={8} value={policy_data.personal_injury_protection} keyy='personal_injury_protection' label='Personal Injury Protection' data={policy_data} showSave={setSave} isSaved={save} setNewData={setPolicyData} />
                  <DataRows key={9} value={policy_data.property_damage_liability} keyy='property_damage_liability' label='Property Damage Liability' data={policy_data} showSave={setSave} isSaved={save} setNewData={setPolicyData} />
                  <DataRows key={10} value={policy_data.collision} keyy='collision' label='Collision' data={policy_data} isSaved={save} setNewData={setPolicyData} showSave={setSave} />
                  <DataRows key={11} value={policy_data.comprehensive} keyy='comprehensive' label='Comprehensive' data={policy_data} isSaved={save} setNewData={setPolicyData} showSave={setSave}/>
                  <DataRows key={12} value={policy_data.customer_gender} keyy='customer_gender' label='Gender' data={policy_data} isSaved={save} setNewData={setPolicyData} showSave={setSave}/>
                  <DataRows key={13} value={policy_data.customer_income_group} keyy='customer_income_group' label='Income Group' data={policy_data} isSaved={save} setNewData={setPolicyData} showSave={setSave}/>
                  <DataRows key={14} value={policy_data.customer_region} keyy='customer_region' label='Region' data={policy_data} isSaved={save} setNewData={setPolicyData} showSave={setSave}/>
                  <DataRows key={15} value={policy_data.customer_marital_status} keyy='customer_marital_status' label='Maratial Status' data={policy_data} isSaved={save} setNewData={setPolicyData} showSave={setSave}/>
                  {save
                        ? <Button onClick={() => {
                              setSave(false)
                              updatePolicies(policy_data)
                                    .then(res => console.log(res))
                                    .catch(err=>console.log(err))
                        }}>
                              Save
                        </Button>
                        : null
                  }
            </DataDisplayFlex>
      )
}

export default DataDisplayCards