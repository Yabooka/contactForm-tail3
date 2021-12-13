import { Button, Paper, Typography } from '@material-ui/core'
import { FormProvider, useForm } from 'react-hook-form'
import { FormInputText } from '@/ui/form/text'
import { FormInputDropdown } from '@/ui/form/dropdown'
import axios from 'axios'
// import { yupResolver } from '@hookform/resolvers/yup/dist/yup.umd'
import * as yup from 'yup'

const { yupResolver } = require('@hookform/resolvers/yup')

const phoneRegExp =
  /^[+]?(1\-|1\s|1|\d{3}\-|\d{3}\s|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{3,4})$/g

const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const schema = yup
  .object({
    name: yup.string().required('Ime je obavezno polje'),
    email: yup
      .string()
      .matches(emailRegExp, 'Molimo unesite odgovarajuci email')
      .required('Email je obavezno polje'),
    phone: yup.string().matches(phoneRegExp, 'Unesite validan broj telefona'),
    device: yup.string().required('Izaberite model vaseg uredjaja'),
    message: yup
      .string()
      .required('Obavezno opisite problem')
      .min(20, 'Opis mora imati najmnanje 20 slova'),
  })
  .required()

const defaultValues = {
  name: '',
  email: '',
  phone: '',
  message: '',
  device: '',
}
const MyForm = () => {
  const methods = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  })
  const { handleSubmit, reset, control, setValue, watch } = methods

  async function onSubmit(values) {
    let config = {
      method: 'post',
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: values,
    }

    try {
      const response = await axios(config)

      if (response.status == 200) {
        reset({
          name: '',
          email: '',
          phone: '',
          message: '',
          device: '',
        })
      }
    } catch (err) {}
  }

  return (
    <Paper
      style={{
        display: 'grid',
        gridRowGap: '20px',
        padding: '20px',
        margin: '10px 300px',
      }}
    >
      <Typography variant='h6'> Form Demo</Typography>

      <FormInputText name='name' control={control} label='Vase ime' />
      <FormInputText name='email' control={control} label='Vasa email adresa' />
      <FormInputText name='phone' control={control} label='Vas broj telefona' />
      <FormInputText
        name='message'
        control={control}
        label='Opisite problem'
        multiline
        rows={4}
      />
      <FormInputDropdown
        name='device'
        control={control}
        label='Model uredjaja'
      />

      <Button onClick={handleSubmit(onSubmit)} variant={'contained'}>
        {' '}
        Submit{' '}
      </Button>
    </Paper>
  )
}

export default MyForm
