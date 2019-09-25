import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import { Button } from './DefaultStyles';

export const Container = styled.div`
    display: flex;
    flex-direction:column;
    background-color: #FFFFFF;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    overflow: auto;
    margin: 24px;
    padding: 24px;
    height: 448px;
    @media only screen and (min-width: 1024px) {
        margin: 32px;
        margin-top: 24px;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    background-color: #FFFFFF;
    height: 100%;
`;

export const CustomTextField = styled(TextField)`
    height: 48px;
    width: 264px;
    @media only screen and (min-width: 1024px) {
        width: 280px;
    }
`;

export const StrechedButton = styled(Button)`
    width: 264px;
    @media only screen and (min-width: 1024px) {
        width: 280px;
    }
`;