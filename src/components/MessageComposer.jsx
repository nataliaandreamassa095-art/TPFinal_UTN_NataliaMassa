import { Paperclip, SendHorizontal, Smile } from 'lucide-react'
import { useState } from 'react'

function MessageComposer({ onSend }) {
  const [message, setMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!message.trim()) return
    onSend(message)
    setMessage('')
  }

  return (
    <form className="message-composer" onSubmit={handleSubmit}>
      <button className="composer-icon" type="button" aria-label="Elegir emoji">
        <Smile size={22} aria-hidden="true" />
      </button>
      <button className="composer-icon attachment-button" type="button" aria-label="Adjuntar archivo">
        <Paperclip size={21} aria-hidden="true" />
      </button>
      <label className="message-input-label">
        <span className="sr-only">Escribir mensaje</span>
        <input
          type="text"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Escribí un mensaje"
          autoComplete="off"
        />
      </label>
      <button className="send-button" type="submit" disabled={!message.trim()} aria-label="Enviar mensaje">
        <SendHorizontal size={21} aria-hidden="true" />
      </button>
    </form>
  )
}

export default MessageComposer
