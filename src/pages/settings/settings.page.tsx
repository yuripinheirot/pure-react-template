import { useNavigate } from 'react-router'
import { goToPage } from '../../utils/summary-routes.utils'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import { AuthLayout } from '@/layouts/auth.layout'

export const SettingsPage = () => {
  const navigate = useNavigate()

  return (
    <AuthLayout>
      <Typography variant='h1'>Settings page!</Typography>
      <Button onClick={(event) => goToPage({ page: 'home', navigate, event })}>
        Home
      </Button>
    </AuthLayout>
  )
}
