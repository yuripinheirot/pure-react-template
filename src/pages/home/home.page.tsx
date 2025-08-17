import { useNavigate } from 'react-router'
import { goToPage } from '../../utils/summary-routes.utils'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import { PageLayout } from '@/layouts/page.layout'

export const Home = () => {
  const navigate = useNavigate()

  return (
    <PageLayout>
      <Typography variant='h1'>Welcome to the home page!</Typography>
      <Button onClick={(event) => goToPage({ page: 'login', navigate, event })}>
        Logout
      </Button>
    </PageLayout>
  )
}
