import { MessageSquarePlus, Search } from 'lucide-react'
import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import useChatSearch from '../hooks/useChatSearch.js'
import useChats from '../hooks/useChats.js'
import Avatar from './Avatar.jsx'

function ConversationList() {
  const { chats } = useChats()
  const [searchParams] = useSearchParams()
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('all')
  const filteredChats = useChatSearch(chats, query, filter)
  const activeChatId = searchParams.get('contacto')

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
        <input
          type="search"
          placeholder="Buscar o iniciar un chat"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </label>

      <div className="chat-filters" aria-label="Filtrar conversaciones">
        {[
          ['all', 'Todas'],
          ['unread', 'No leídas'],
          ['favorites', 'Favoritas'],
        ].map(([value, label]) => (
          <button
            key={value}
            type="button"
            className={filter === value ? 'active' : ''}
            onClick={() => setFilter(value)}
            aria-pressed={filter === value}
          >
            {label}
          </button>
        ))}
      </div>

      <nav className="chat-list" aria-label="Lista de chats">
        {filteredChats.map((chat) => {
          const lastMessage = chat.messages.at(-1)
          return (
            <Link
              key={chat.id}
              className={`chat-list-item${activeChatId === chat.id ? ' active' : ''}`}
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
            </Link>
          )
        })}
        {filteredChats.length === 0 && (
          <p className="empty-search">No encontramos conversaciones con ese criterio.</p>
        )}
      </nav>
    </aside>
  )
}

export default ConversationList
