import { ReactQueryProvider } from './react-query.provider'
import { AuthRoutesProvider } from './auth.provider'
import { SidebarProvider } from '@/components/ui/sidebar'
import { Toaster } from 'sonner'

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactQueryProvider>
      <AuthRoutesProvider>
        <SidebarProvider>
          {children} <Toaster />
        </SidebarProvider>
      </AuthRoutesProvider>
    </ReactQueryProvider>
  )
}
