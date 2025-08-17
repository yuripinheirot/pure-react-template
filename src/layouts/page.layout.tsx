export const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-col items-center justify-center h-screen gap-4 transition-all duration-3000 animate-fade-in animate-infinite'>
      {children}
    </div>
  )
}
