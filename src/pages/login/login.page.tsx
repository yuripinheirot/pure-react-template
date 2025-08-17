import { useNavigate } from 'react-router'
import { goToPage } from '../../utils/summary-routes.utils'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import { InputForm } from '@/components/form/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm, type SubmitHandler } from 'react-hook-form'
import { loginSchema, type LoginSchema } from './login.schema'
import { useAuth } from '@/providers'
import { PageLayout } from '@/layouts/page.layout'
import { handleToaster } from '@/utils/handle-toaster'

export const Login = () => {
  const navigate = useNavigate()
  const { login } = useAuth()

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  })

  const validateLogin = (data: LoginSchema) => {
    if (data.username !== 'admin' || data.password !== 'admin') {
      form.setError('username', { message: 'Invalid username' })
      form.setError('password', { message: 'Invalid password' })
      return false
    }

    return true
  }

  const onSubmit: SubmitHandler<LoginSchema> = (data) => {
    const isValid = validateLogin(data)

    if (isValid) {
      login(data)
      goToPage({ page: 'home', navigate })
      handleToaster({ message: 'Login successful', type: 'success' })
    } else {
      handleToaster({ message: 'Login failed', type: 'error' })
    }
  }

  return (
    <PageLayout>
      <Typography variant='h1'>Login</Typography>
      <FormProvider {...form}>
        <form
          className='flex flex-col gap-4 w-full max-w-md'
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <InputForm
            name='username'
            placeholder='Username'
          />
          <InputForm
            name='password'
            type='password'
            placeholder='Password'
          />
          <Typography variant='body3'>For test, use: admin admin</Typography>
          <Button
            type='submit'
            disabled={form.formState.isSubmitting}
          >
            Login
          </Button>
        </form>
      </FormProvider>
    </PageLayout>
  )
}
