import { useNavigate } from 'react-router'
import { goToPage } from '../../utils/summary-routes.utils'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import { InputForm } from '@/components/form/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm, type SubmitHandler } from 'react-hook-form'
import { loginSchema, type LoginSchema } from './login.schema'
import { useAuth } from '@/providers/auth.provider'
import { handleToaster } from '@/utils/handle-toaster'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { AppLayout } from '@/layouts/app.layout'

export const LoginPage = () => {
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
    <AppLayout>
      <Card className='w-full max-w-md mx-auto'>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FormProvider {...form}>
            <form
              className='flex flex-col gap-4 w-full max-w-md'
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <div className='flex flex-col gap-6'>
                <div className='grid gap-3'>
                  <Label htmlFor='email'>Email</Label>
                  <InputForm
                    name='username'
                    type='text'
                  />
                </div>
                <div className='grid gap-3'>
                  <div className='flex items-center'>
                    <Label htmlFor='password'>Password</Label>
                    <a
                      href='#'
                      className='ml-auto inline-block text-sm underline-offset-4 hover:underline'
                    >
                      Forgot your password?
                    </a>
                  </div>
                  <InputForm
                    name='password'
                    type='password'
                  />
                </div>
                <Typography variant='body3'>
                  For test, use credentials: admin admin
                </Typography>
                <div className='flex flex-col gap-3'>
                  <Button
                    type='submit'
                    className='w-full'
                  >
                    Login
                  </Button>
                  <Button
                    variant='outline'
                    className='w-full'
                    disabled
                  >
                    Login with Google
                  </Button>
                </div>
              </div>
              <div className='mt-4 text-center text-sm'>
                Don&apos;t have an account?{' '}
                <a
                  href='#'
                  className='underline underline-offset-4'
                >
                  Sign up
                </a>
              </div>
            </form>
          </FormProvider>
        </CardContent>
      </Card>
    </AppLayout>
  )
}
