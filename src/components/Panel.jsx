import React from 'react';
import styled from 'styled-components';

import Table from './Table';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #F0F0F0;
    flex: 1;
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
            <Table />
        </Container>
    );
}