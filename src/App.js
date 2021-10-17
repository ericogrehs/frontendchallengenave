import React from 'react'
import styled from 'styled-components'
import { useRoutes } from 'hookrouter'
import { ToastContainer } from 'react-toastify'

import brLocale from 'date-fns/locale/pt-BR'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'

import Navbar from './components/Navbar'
import Panel from './screens/Panel'
import CreateUser from './screens/CreateUser'
import InfoUser from './screens/InfoUser'

import 'react-toastify/dist/ReactToastify.min.css'

const routes = {
  '/': () => <Panel />,
  '/create-user': () => <CreateUser />,
  '/info-user/:id': ({ id }) => <InfoUser id={id} />,
}

function App() {
  const routeResult = useRoutes(routes)

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={brLocale}>
      <Container>
        <ToastContainer theme='dark' />
        <Navbar />
        {routeResult}
      </Container>
    </LocalizationProvider>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f0f0f0;
`

export default App
