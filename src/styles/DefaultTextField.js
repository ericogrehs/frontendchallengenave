import MuiTextField from '@mui/material/TextField'
import styled from 'styled-components'

const DefaultTextField = styled(MuiTextField)`
  height: 48px;
  width: 264px;
  @media only screen and (min-width: 1024px) {
    width: 280px;
  }
`
export default DefaultTextField
