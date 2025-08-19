import { useNavigate } from 'react-router'
import { goToPage } from '../../utils/summary-routes.utils'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import { AuthLayout } from '@/layouts/auth.layout'

export const SearchPage = () => {
  const navigate = useNavigate()

  return (
    <AuthLayout>
      <Typography variant='h1'>Search page!</Typography>
      <Button onClick={(event) => goToPage({ page: 'home', navigate, event })}>
        Home
      </Button>
    </AuthLayout>
  )
}
