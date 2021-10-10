import React, { useState } from 'react'
import MaskedInput from 'react-text-mask'
import axios from 'axios'

import Snackbar from '@material-ui/core/Snackbar'

import { Title, DefaultScreenContainer } from '../themes/DefaultStyles'
import { Form, CustomTextField, StrechedButton } from '../themes/CreateUser'

const TextMaskCustom = ({ inputRef, ...other }) => {
  return (
    <MaskedInput
      {...other}
      mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={'_'}
    />
  )
}

export default function CreateUser() {
  const [name, setName] = useState('')
  const [vacancy, setVacancy] = useState('')
  const [birthday, setBirthday] = useState('')
  const [isBirthdayCorrect, setIsBirthdayCorrect] = useState(true)
  const [email, setEmail] = useState('')
  const [isEmailCorrect, setIsEmailCorrect] = useState(true)
  const [open, setOpen] = React.useState(false)
  const [snackbarMessage, setSnackbarMessage] = React.useState('')

  async function handleCreateNewUser(event) {
    event.preventDefault()

    if (!isBirthdayCorrect) {
      setSnackbarMessage('Data de nascimento incorreta')
      setOpen(true)
      return
    }

    if (!isEmailCorrect) {
      setSnackbarMessage('Email incorreto')
      setOpen(true)
      return
    }

    let response = await axios.post('http://localhost:3000/users', {
      name,
      vacancy,
      birthday,
      email,
    })

    if ((response.status === 200) | 201) {
      setSnackbarMessage('Usuário criado com sucesso')
      setOpen(true)
      clearForm()
    } else {
      setSnackbarMessage('Erro ao criar novo usuário')
      setOpen(true)
    }
  }

  function handleFocus(event) {
    event.target.select()
  }

  function clearForm() {
    setName('')
    setVacancy('')
    setBirthday('')
    setIsBirthdayCorrect(true)
    setEmail('')
    setIsEmailCorrect(true)
  }

  return (
    <DefaultScreenContainer>
      <Form onSubmit={handleCreateNewUser}>
        <Title secondary>Criar Usuário</Title>
        <CustomTextField
          required
          id='name'
          label='Nome'
          margin='none'
          value={name}
          onChange={event => setName(event.target.value)}
        />
        <CustomTextField
          required
          id='vacancy'
          label='Vaga'
          margin='none'
          value={vacancy}
          onChange={event => setVacancy(event.target.value)}
        />
        <CustomTextField
          required
          id='birthday'
          label='Data de Nascimento'
          margin='none'
          placeholder='##/##/####'
          value={birthday}
          error={!isBirthdayCorrect}
          onFocus={handleFocus}
          onChange={event => {
            setBirthday(event.target.value)
            setIsBirthdayCorrect(
              /\d\d\/\d\d\/\d\d\d\d/.test(event.target.value)
            )
          }}
          InputProps={{
            inputComponent: TextMaskCustom,
            value: birthday,
          }}
        />
        <CustomTextField
          required
          id='email'
          label='E-mail'
          margin='none'
          value={email}
          onChange={event => {
            setEmail(event.target.value)
            // eslint-disable-next-line no-control-regex
            setIsEmailCorrect(
              /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(
                event.target.value
              )
            )
          }}
          error={!isEmailCorrect}
        />
        <StrechedButton type='submit'>ENVIAR</StrechedButton>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={open}
          autoHideDuration={3000}
          onClose={() => setOpen(false)}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id='message-id'>{snackbarMessage}</span>}
        />
      </Form>
    </DefaultScreenContainer>
  )
}
