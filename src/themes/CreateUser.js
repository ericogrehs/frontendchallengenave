import styled from 'styled-components'
import { Button } from './DefaultStyles'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #ffffff;
  height: 100%;
`

export const StrechedButton = styled(Button)`
  width: 264px;
  @media only screen and (min-width: 1024px) {
    width: 280px;
  }
`
