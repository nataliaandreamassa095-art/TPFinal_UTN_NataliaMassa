import { CheckCheck } from 'lucide-react'

function MessageBubble({ message }) {
  if (message.direction === 'system') {
    return <p className="system-message">{message.text}</p>
  }

  return (
    <div className={`message-row ${message.direction === 'out' ? 'message-row-out' : ''}`}>
      <div className={`message-bubble message-${message.direction}`}>
        <p>{message.text}</p>
        <span className="message-meta">
          {message.time}
          {message.direction === 'out' && (
            <CheckCheck size={15} aria-label={message.read ? 'Mensaje leído' : 'Mensaje enviado'} />
          )}
        </span>
      </div>
    </div>
  )
}

export default MessageBubble
