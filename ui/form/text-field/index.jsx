import React from 'react'
import FormField from '@/ui/form/form-field'
import { TextField as MUITextField } from '@material-ui/core'

const TextField = React.forwardRef((props, ref) => (
  <FormField ref={ref} Component={MUITextField} {...props} />
))

export default TextField
