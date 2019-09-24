import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from "react-router-dom"

import Navbar from './components/Navbar';
import Panel from './components/Panel';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`;

function App() {
	return (
		<Router>
			<Container>
				<Navbar />
				<Route exact path="/" component={Panel} />
				{/* <Route path="/create-user" component={ScreenCreateUser} /> */}
				{/* <Route path="/info-user" component={ScreenInfoUser} /> */}
			</Container>
		</Router>
	);
}

export default App;
