import { MessageSquarePlus, Search } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import useChats from '../hooks/useChats.js'
import Avatar from './Avatar.jsx'

function ConversationList() {
  const { chats } = useChats()

  return (
    <aside className="conversation-list" aria-label="Conversaciones">
      <header className="list-header">
        <div>
          <span className="eyebrow">Mensajería</span>
          <h1>Conversaciones</h1>
        </div>
        <Link className="new-chat-button" to="/contacts/new" aria-label="Crear contacto">
          <MessageSquarePlus size={21} aria-hidden="true" />
        </Link>
      </header>

      <label className="search-box">
        <Search size={18} aria-hidden="true" />
        <span className="sr-only">Buscar conversación</span>
        <input type="search" placeholder="Buscar o iniciar un chat" disabled />
      </label>

      <nav className="chat-list" aria-label="Lista de chats">
        {chats.map((chat) => {
          const lastMessage = chat.messages.at(-1)
          return (
            <NavLink
              key={chat.id}
              className={({ isActive }) => `chat-list-item${isActive ? ' active' : ''}`}
              to={`/chat?contacto=${chat.id}`}
            >
              <Avatar initials={chat.initials} color={chat.color} />
              <span className="chat-summary">
                <span className="chat-summary-top">
                  <strong>{chat.name}</strong>
                  <time>{lastMessage?.time}</time>
                </span>
                <span className="chat-summary-bottom">
                  <span>{lastMessage?.text}</span>
                  {chat.unread > 0 && (
                    <span className="unread-badge" aria-label={`${chat.unread} mensajes sin leer`}>
                      {chat.unread}
                    </span>
                  )}
                </span>
              </span>
            </NavLink>
          )
        })}
      </nav>
    </aside>
  )
}

export default ConversationList
