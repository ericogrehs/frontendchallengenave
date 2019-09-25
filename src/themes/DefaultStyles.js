import styled from 'styled-components';

export const Button = styled.button`
    background: #000000;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    border: none;

    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    text-transform: uppercase;
    color: #FFFFFF;
    
    min-width: 140px;
    height: 36px;

    cursor: pointer;

    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    :hover {
        background: rgba(0, 0, 0, 0.5);
    }
`;

export const Title = styled.h4`
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    margin: 0px;
    padding: 0px;

    ${props => {
        if (props.primary) return `color: #000000;`
        if (props.secondary) return `color: #7C7C7C;`
        else return `color: #000000;`
    }}
    ;
`;