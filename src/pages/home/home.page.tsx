import { useNavigate } from 'react-router'
import { goToPage } from '../../utils/summary-routes.utils'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import { AuthLayout } from '@/layouts/auth.layout'
import { useAuth } from '@/providers/auth.provider'
import { TableExample } from './table-example'

export const HomePage = () => {
  const navigate = useNavigate()
  const { logout } = useAuth()

  return (
    <AuthLayout>
      <Typography variant='h1'>Welcome to the home page!</Typography>
      <TableExample />
      <Button
        onClick={(event) => {
          logout()
          goToPage({ page: 'login', navigate, event })
        }}
      >
        Logout
      </Button>
    </AuthLayout>
  )
}
