import { useEffect, useMemo } from 'react'
import useLocalStorage from '../hooks/useLocalStorage.js'
import PreferencesContext from './preferencesContext.js'

function PreferencesProvider({ children }) {
  const [theme, setTheme] = useLocalStorage('nexo-chat-theme', 'light')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  const value = useMemo(
    () => ({
      theme,
      toggleTheme: () => setTheme((current) => (current === 'light' ? 'dark' : 'light')),
    }),
    [setTheme, theme],
  )

  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>
}

export default PreferencesProvider
