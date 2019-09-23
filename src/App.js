import React from 'react';
import styled from 'styled-components';

import './App.css';
import Navbar from './components/Navbar';
import Panel from './components/Panel';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`;

function App() {
	return (
		<Container>
			<Navbar />
			<Panel />
		</Container>
	);
}

export default App;
