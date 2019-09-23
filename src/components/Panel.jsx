import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

import UserTable from './UserTable';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #F0F0F0;
    flex: 1;
    padding: 24px;
    @media only screen and (min-width: 1024px) {
        padding: 32px;
    }
`;

const ContainerMenu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export default function Panel() {
    return (
        <Container>
            <ContainerMenu>
                <h1>Title</h1>
                <button>Click</button>
            </ContainerMenu>
            <UserTable />
        </Container>
    );
}