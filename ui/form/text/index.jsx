import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import TextField from '@material-ui/core/TextField'

export const FormInputText = (
  { name, control, label, variant = 'standard', size, ...restProps },
  ref
) => {
  return (
    <Controller
      name={name}
      ref={ref}
      control={control}
      render={({
        field: { onChange, value, ref },
        fieldState: { error },
        formState,
      }) => (
        <TextField
          helperText={error ? error.message : null}
          size={size}
          error={!!error}
          onChange={onChange}
          value={value}
          fullWidth
          label={label}
          {...restProps}
        />
      )}
    />
  )
}
