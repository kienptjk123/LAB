import { createContext, useContext, useState } from 'react'

const DarkModeContext = createContext()

// eslint-disable-next-line react/prop-types
export function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode
      localStorage.setItem('darkMode', JSON.stringify(newMode))
      return newMode
    })
  }

  return <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>{children}</DarkModeContext.Provider>
}

export function useDarkMode() {
  return useContext(DarkModeContext)
}
