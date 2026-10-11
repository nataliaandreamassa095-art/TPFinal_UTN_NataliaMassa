import { MessageCircleMore, Moon, Sun } from 'lucide-react'
import { NavLink, Outlet } from 'react-router-dom'
import usePreferences from '../hooks/usePreferences.js'

function AppShell() {
  const { theme, toggleTheme } = usePreferences()

  return (
    <div className="app-shell">
      <nav className="app-rail" aria-label="Navegación principal">
        <NavLink className="brand-button" to="/chats" aria-label="Ir a conversaciones">
          <MessageCircleMore aria-hidden="true" size={26} strokeWidth={2.4} />
        </NavLink>
        <div className="rail-spacer" />
        <button
          className="icon-button"
          type="button"
          onClick={toggleTheme}
          aria-label={theme === 'light' ? 'Activar modo oscuro' : 'Activar modo claro'}
        >
          {theme === 'light' ? <Moon aria-hidden="true" size={20} /> : <Sun aria-hidden="true" size={20} />}
        </button>
        <div className="profile-avatar" aria-label="Perfil de Natalia">NM</div>
      </nav>
      <Outlet />
    </div>
  )
}

export default AppShell
