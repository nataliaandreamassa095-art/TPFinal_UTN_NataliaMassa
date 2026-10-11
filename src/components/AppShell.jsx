import { MessageCircleMore, Settings } from 'lucide-react'
import { NavLink, Outlet } from 'react-router-dom'

function AppShell() {
  return (
    <div className="app-shell">
      <nav className="app-rail" aria-label="Navegación principal">
        <NavLink className="brand-button" to="/chats" aria-label="Ir a conversaciones">
          <MessageCircleMore aria-hidden="true" size={26} strokeWidth={2.4} />
        </NavLink>
        <div className="rail-spacer" />
        <button className="icon-button" type="button" aria-label="Configuración">
          <Settings aria-hidden="true" size={21} />
        </button>
        <div className="profile-avatar" aria-label="Perfil de Natalia">NM</div>
      </nav>
      <Outlet />
    </div>
  )
}

export default AppShell
