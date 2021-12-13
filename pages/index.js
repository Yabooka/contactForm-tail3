import { PageSEO } from '@/components/SEO'
import metadata from '@/components/metadata'
import { useForm, FormProvider } from 'react-hook-form'
import axios from 'axios'
import { useToast } from '@/hooks/useToast'
import { useRouter } from 'next/router'
import { Button } from '@material-ui/core'
import TextField from '@/ui/form/text-field'

export default function Home() {
  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  })

  const { reset } = form

  const toast = useToast()
  const router = useRouter()

  async function onSubmitForm(values) {
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
        })
        toast(
          'success',
          'Thank you for contacting us, we will be in touch soon.'
        )
      }
    } catch (err) {}
  }

  return (
    <FormProvider {...form}>
      <PageSEO title={metadata.title} description={metadata.description} />
      <div className='grid grid-cols-2'>
        <div className='w-full'>
          <h2 className='text-2xl font-bold'>Contact Us</h2>
        </div>
        <div>
          <form
            onSubmit={form.handleSubmit(onSubmitForm)}
            className='grid grid-cols-1 gap-y-6'
          >
            <div>
              <TextField
                name='name'
                label='Your Name'
                rules={{ required: 'Name is required!' }}
                className='w-full'
              />
              <br />
              <br />
              <TextField
                type='email'
                name='email'
                label='Your best email address'
                rules={{
                  required: 'Email is equired!',
                  pattern: {
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                    message: 'Please enter a valid email address',
                  },
                }}
                className='w-full'
              />
              <br />
              <br />
              <TextField
                type='phone'
                name='phone'
                label='Phone Number'
                className='w-full'
              />
              <br />
              <br />
              <TextField
                name='message'
                label='Message'
                rules={{
                  required: 'Message is required!',
                  minLength: {
                    value: 10,
                    message: 'Message can not be less then 10 chacarters',
                  },
                }}
                className='w-full'
                multiline
              />
            </div>
            <div>
              <Button variant='contained' color='primary' type='submit'>
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </FormProvider>
  )
}
