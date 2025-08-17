import { BrowserRouter, Routes, Route } from 'react-router'
import { Home } from './pages/home/home.page'
import { Login } from './pages/login/login.page'
import { ReactQueryProvider, AuthProvider, PrivateRoute } from './providers'
import { AppLayout } from './layouts/app.layout'
import { Toaster } from 'sonner'

export const App = () => {
  return (
    <AppLayout>
      <ReactQueryProvider>
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route
                path='/'
                element={<PrivateRoute />}
              >
                <Route
                  path='/'
                  element={<Home />}
                />
              </Route>
              <Route
                path='/login'
                element={<Login />}
              />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </ReactQueryProvider>
      <Toaster />
    </AppLayout>
  )
}
