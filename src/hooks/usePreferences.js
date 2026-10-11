import { useContext } from 'react'
import PreferencesContext from '../context/preferencesContext.js'

function usePreferences() {
  const context = useContext(PreferencesContext)

  if (!context) {
    throw new Error('usePreferences debe utilizarse dentro de PreferencesProvider')
  }

  return context
}

export default usePreferences
