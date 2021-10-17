import { forwardRef } from 'react'

import DefaultTextField from '../styles/DefaultTextField'

const TextField = forwardRef(({ error, ...props }, ref) => (
  <DefaultTextField
    variant='standard'
    ref={ref}
    error={Boolean(error)}
    helperText={error}
    {...props}
  />
))

export default TextField
