import * as yup from 'yup'

yup.setLocale({
  mixed: {
    required: 'Campo Obrigatório',
  },
})

export const createUserForm = yup.object({
  name: yup.string().required(),
  job: yup.string().required(),
  birthdate: yup
    .string()
    .nullable()
    .test('date-invalid', 'Data inválida', value => new Date(value).getTime()),
  email: yup.string().required().email('Email Inválido'),
})
