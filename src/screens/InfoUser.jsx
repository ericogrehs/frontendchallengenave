import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { navigate } from 'hookrouter'

import {
  DefaultScreenContainer,
  Title,
  StrechedButton,
} from '../themes/DefaultStyles'

const Container = styled(DefaultScreenContainer)`
  && {
    align-items: initial;
    justify-content: start;
    height: 100%;
  }
`

const Field = styled.h6`
  margin: 0px;
  margin-top: 24px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
`

const Button = styled(StrechedButton)`
  margin-top: 24px;
`

export default function InfoUser({ id }) {
  const [userInfo, setUserInfo] = useState({})

  useEffect(() => {
    async function fetchUser(id) {
      const response = await axios.get(`http://localhost:3000/users/${id}`)
      setUserInfo(response.data)
    }
    fetchUser(id)
  }, [id])

  return (
    <Container>
      <Title secondary>{userInfo.name}</Title>
      <Field>
        <b>Vaga:</b> {userInfo.vacancy}
      </Field>
      <Field>
        <b>Data de nascimento:</b> {userInfo.birthday}
      </Field>
      <Field>
        <b>Email:</b> {userInfo.email}
      </Field>
      <Button onClick={() => navigate('/')}>Voltar</Button>
    </Container>
  )
}
