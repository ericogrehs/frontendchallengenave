import { Controller } from 'react-hook-form'
import DatePicker from '@mui/lab/DatePicker'

import DefaultTextField from '../styles/DefaultTextField'

const DateField = ({ error, control, label, name, ...props }) => (
  <Controller
    control={control}
    name={name}
    render={({
      field: { onChange, onBlur, value, name, ref },
      fieldState: { invalid, isTouched, isDirty, error },
      formState,
    }) => (
      <DatePicker
        label={label}
        inputFormat='dd/MM/yyyy'
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        inputRef={ref}
        {...props}
        renderInput={params => (
          <DefaultTextField
            variant='standard'
            helperText={error?.message}
            {...params}
            error={Boolean(error?.message)}
          />
        )}
      />
    )}
  />
)

export default DateField
