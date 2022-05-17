import DataDisplayCards from './DataDisplay'
import { PolicyData } from './datamodels'


const data={
      policy_id: '7854',
      date_of_Purchase: "20/02/20",
      customer_id:'4786',
      fuel:'yes',
      vehicle_segment:'baaleswar',
      premium:'yes',
      bodily_injury_liability:'yes',
      personal_injury_protection:'no',
      property_damage_liability: 'yes',
      collision:'No',	
      comprehensive:'yes',	
      customer_gender:'male',
      customer_income_group:'Higher',	
      customer_region:'North',
      customer_marital_status:'Hoe'

}


const DataDisplayContainer = ({ policyDataList }: {
      policyDataList:PolicyData[] | null
}) => {

      return (
            <div>
                  {
                        policyDataList
                              ? policyDataList.map(each => {
                                          return (
                                                < DataDisplayCards key={Date.now().toString(32)} policyData={each} />
                                          )}
                                    ) 
                              :null
                  }

            </div>
      )
}

export default DataDisplayContainer