import React from 'react';
import styled from 'styled-components';
import { navigate } from 'hookrouter';

import logoNave from "../images/navelogobranco.png";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    background-color: #000000;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
    height: 60px;
    width: 100%;
`;

const Logo = styled.img`
    margin-left: 32px;
    width: 128px;
    height: 32px;
    cursor: pointer;
`;

export default function Navbar() {
    return (
        <Container>
            <Logo src={logoNave} alt="Logo da Nave" onClick={() => navigate('/')}/>
        </Container>
    );
}