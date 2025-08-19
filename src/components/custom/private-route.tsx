import { useAuth } from '@/providers/auth.provider'
import { Navigate, Outlet } from 'react-router'

export const PrivateRoute = () => {
  const { user } = useAuth()
  return user ? <Outlet /> : <Navigate to='/login' />
}
