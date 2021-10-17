import { useState } from 'react'
import axios from 'axios'
import Snackbar from '@mui/material/Snackbar'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { format } from 'date-fns'

import TextField from '../components/TextField'
import DateField from '../components/DateField'

import { createUserForm } from '../schemas/users'

import { Title, DefaultScreenContainer } from '../themes/DefaultStyles'
import { Form, StrechedButton } from '../themes/CreateUser'

function CreateUser() {
  const [open, setOpen] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState('')
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createUserForm),
    defaultValues: {
      name: '',
      job: '',
      birthdate: null,
      email: '',
    },
  })

  const onSubmit = async data => {
    try {
      const body = {
        name: data.name,
        job: data.job,
        birthdate: format(new Date(data.birthdate), 'dd/MM/yyyy'),
        email: data.email,
      }

      let response = await axios.post('http://localhost:3000/users', body)

      if ((response.status === 200) | 201) {
        setSnackbarMessage('Usuário criado com sucesso')
        setOpen(true)
        reset()
      }
    } catch (error) {
      setSnackbarMessage('Erro ao criar novo usuário')
      setOpen(true)
    }
  }

  return (
    <DefaultScreenContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title secondary>Criar Usuário</Title>
        <TextField
          label='Nome *'
          error={errors.name?.message}
          {...register('name')}
        />
        <TextField
          label='Vaga *'
          error={errors.job?.message}
          {...register('job')}
        />
        <DateField
          name='birthdate'
          control={control}
          label='Data de Nascimento *'
          error={errors.birthdate?.message}
        />
        <TextField
          label='Email *'
          error={errors.email?.message}
          {...register('email')}
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

export default CreateUser
