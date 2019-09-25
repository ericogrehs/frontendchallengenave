import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from "react-router-dom"

import Navbar from './components/Navbar';
import Panel from './screens/Panel';
import CreateUser from './screens/CreateUser';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	background-color: #F0F0F0;
`;

function App() {
	return (
		<Router>
			<Container>
				<Navbar />
				<Route exact path="/" component={Panel} />
				<Route path="/create-user" component={CreateUser} />
				{/* <Route path="/info-user" component={InfoUser} /> */}
			</Container>
		</Router>
	);
}

export default App;
