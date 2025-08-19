import { AppSidebar } from '@/components/custom/app-sidebar'
import { SidebarTrigger } from '@/components/ui/sidebar'

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='flex w-full h-screen'>
      <AppSidebar />
      <SidebarTrigger />
      <div
        id='auth-layout'
        className='w-full flex flex-col items-center justify-center gap-6'
      >
        {children}
      </div>
    </main>
  )
}
