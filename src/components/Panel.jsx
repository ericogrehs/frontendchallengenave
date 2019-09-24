import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import UserTable from './UserTable';

import { Button, Title } from '../themes/DefaultStyles';

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
    align-items: center;
`;

export default function Panel() {
    return (
        <Container>
            <ContainerMenu>
                <Title primary>Usuários</Title>
                <Button>Criar</Button>
            </ContainerMenu>
            <UserTable />
        </Container>
    );
}