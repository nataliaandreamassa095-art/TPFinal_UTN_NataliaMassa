import { ArrowLeft, MoreVertical, Phone, Search, Video } from 'lucide-react'
import { Link } from 'react-router-dom'
import useChats from '../hooks/useChats.js'
import Avatar from './Avatar.jsx'
import MessageBubble from './MessageBubble.jsx'
import MessageComposer from './MessageComposer.jsx'

function ChatWindow({ chatId }) {
  const { chats, sendMessage } = useChats()
  const chat = chats.find((item) => item.id === chatId)

  if (!chat) {
    return (
      <section className="missing-chat">
        <h2>Conversación no encontrada</h2>
        <p>Elegí otro chat de la lista para continuar.</p>
        <Link className="primary-link" to="/chats">Ver conversaciones</Link>
      </section>
    )
  }

  return (
    <section className="chat-window" aria-labelledby="chat-person-name">
      <header className="chat-header">
        <Link className="mobile-back-button" to="/chats" aria-label="Volver a conversaciones">
          <ArrowLeft size={23} aria-hidden="true" />
        </Link>
        <Avatar initials={chat.initials} color={chat.color} size="small" />
        <div className="chat-person">
          <h2 id="chat-person-name">{chat.name}</h2>
          <p>{chat.status}</p>
        </div>
        <div className="chat-actions" aria-label="Acciones de conversación">
          <button type="button" aria-label="Videollamada"><Video size={20} /></button>
          <button type="button" aria-label="Llamada"><Phone size={19} /></button>
          <button type="button" aria-label="Buscar en el chat"><Search size={19} /></button>
          <button type="button" aria-label="Más opciones"><MoreVertical size={20} /></button>
        </div>
      </header>

      <div className="messages-area" aria-live="polite" aria-label={`Mensajes con ${chat.name}`}>
        <div className="day-divider"><span>Hoy</span></div>
        {chat.messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}
      </div>

      <MessageComposer onSend={(text) => sendMessage(chat.id, text)} />
    </section>
  )
}

export default ChatWindow
