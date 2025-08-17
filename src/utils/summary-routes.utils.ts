import type { NavigateFunction } from 'react-router'

export const summaryRoutes = {
  home: '/',
  login: '/login',
}

export const goToPage = ({
  page,
  navigate,
  event,
}: {
  page: keyof typeof summaryRoutes
  navigate: NavigateFunction
  event?: React.MouseEvent<HTMLButtonElement>
}) => {
  event?.preventDefault()
  navigate(summaryRoutes[page])
}
