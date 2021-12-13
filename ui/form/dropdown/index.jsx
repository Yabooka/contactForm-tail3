import React from 'react'
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'
import { useFormContext, Controller } from 'react-hook-form'

const options = [
  {
    label: 'iPhone',
    value: 'iPhone 5, 5S,5SE',
  },
  {
    label: 'iPhone 6, 6S',
    value: 'iPhone 6, 6S',
  },
]

export const FormInputDropdown = ({ name, control, label }) => {
  const generateSingleOptions = () => {
    return options.map((option) => {
      return (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      )
    })
  }

  return (
    <FormControl size={'small'}>
      <InputLabel>{label}</InputLabel>
      <Controller
        render={({ field: { onChange, value } }) => (
          <Select onChange={onChange} value={value}>
            {generateSingleOptions()}
          </Select>
        )}
        control={control}
        name={name}
      />
    </FormControl>
  )
}
