import { BrowserRouter, Routes, Route } from 'react-router'
import { HomePage } from './pages/home/home.page'
import { LoginPage } from './pages/login/login.page'
import { PrivateRoute } from './components/custom/private-route'
import { AppProviders } from './providers'
import { SearchPage } from './pages/search/search.page'
import { SettingsPage } from './pages/settings/settings.page'

export const App = () => {
  return (
    <AppProviders>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={<PrivateRoute />}
          >
            <Route
              path='/'
              element={<HomePage />}
            />
            <Route
              path='/search'
              element={<SearchPage />}
            />
            <Route
              path='/settings'
              element={<SettingsPage />}
            />
          </Route>
          <Route
            path='/login'
            element={<LoginPage />}
          />
        </Routes>
      </BrowserRouter>
    </AppProviders>
  )
}
