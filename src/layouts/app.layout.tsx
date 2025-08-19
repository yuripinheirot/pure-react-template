export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      id='app-layout'
      className='flex flex-col items-center justify-center h-screen w-full gap-4 transition-all duration-3000 animate-fade-in animate-infinite'
    >
      {children}
    </div>
  )
}
