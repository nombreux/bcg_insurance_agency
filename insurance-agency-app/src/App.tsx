import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from '@emotion/styled';
import Search from './Components/Search';
import DataDisplay from './Components/DataDisplay';
import DataDisplayContainer from './Components/DataDisplayContainer';
import Graph from './Components/Graph';
import SelectGraph from './Components/Graph';


const OuterMostFlex = styled.div({
	marginTop: '50px',
	display: 'flex',
	flexDirection: 'column',
	flexWrap: 'wrap',
	alignContent: 'center',
	alignItems: 'center',
	justifyContent: 'center',
	// background:'aliceblue'

})

const ContentFlex = styled.div({
	display: 'flex',
	flexDirection: 'column',
	flexWrap: 'wrap',
	alignContent: 'center',
	alignItems: 'center',
	justifyContent: 'center',
	width: '70vw',
	marginBottom: '100px'
	// background:'aliceblue'
})


function App() {

	const [policyData, setPolicyData] = useState(null)



	return (
		<OuterMostFlex>
			<ContentFlex>
				<div>

					<Search
						// @ts-ignore
						setData={setPolicyData}
					/>

				</div>
				<div>
					<DataDisplayContainer policyDataList={policyData} />
				</div>
				<div>
					<SelectGraph />
				</div>

			</ContentFlex>
		</OuterMostFlex>
	);
}

export default App;
