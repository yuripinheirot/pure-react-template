// src/components/Modeswitcher.jsx
import { useState, useEffect } from 'react'
import { Button } from '../ui/button'

export const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(
    () =>
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
  )

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
    }
  }, [isDark])

  return (
    <Button
      className='p-2 bg-gray-200 dark:bg-gray-700 rounded'
      onClick={() => setIsDark(!isDark)}
    >
      {isDark ? '🌙' : '☀️'}
    </Button>
  )
}
