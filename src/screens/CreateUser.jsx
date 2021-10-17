import axios from 'axios'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { format } from 'date-fns'
import { toast } from 'react-toastify'

import TextField from '../components/TextField'
import DateField from '../components/DateField'

import { createUserForm } from '../schemas/users'

import { Title, DefaultScreenContainer } from '../themes/DefaultStyles'
import { Form, StrechedButton } from '../themes/CreateUser'

function CreateUser() {
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
      await axios.post('http://localhost:3000/users', body)
      toast.success('Usuário criado com sucesso')
      reset()
    } catch (error) {
      toast.error('Erro ao criar novo usuário')
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
      </Form>
    </DefaultScreenContainer>
  )
}

export default CreateUser
