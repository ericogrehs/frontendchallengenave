import React from 'react';
import styled from 'styled-components';
import { useRoutes } from 'hookrouter';

import Navbar from './components/Navbar';
import Panel from './screens/Panel';
import CreateUser from './screens/CreateUser';
import InfoUser from './screens/InfoUser';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	background-color: #F0F0F0;
`;

const routes = {
	'/': () => <Panel />,
	'/create-user': () => <CreateUser />,
	'/info-user/:id': ({ id }) => <InfoUser id={id} />
};

function App() {
	const routeResult = useRoutes(routes);

	return (
		<Container>
			<Navbar />
			{routeResult}
		</Container>
	);
}

export default App;
