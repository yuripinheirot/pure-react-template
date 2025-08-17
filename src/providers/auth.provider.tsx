/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext, useState } from 'react'
import { Outlet } from 'react-router'
import { Navigate } from 'react-router'

export const AuthContext = createContext<{
  user: any
  login: (userData: any) => void
  logout: () => void
}>({
  user: null,
  login: () => {},
  logout: () => {},
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState(null)

  const login = (userData: any) => setUser(userData)
  const logout = () => setUser(null)

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}

export const PrivateRoute = () => {
  const { user } = useAuth()
  return user ? <Outlet /> : <Navigate to='/login' />
}
