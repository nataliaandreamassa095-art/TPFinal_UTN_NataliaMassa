import { LockKeyhole, MessagesSquare } from 'lucide-react'

function EmptyConversation() {
  return (
    <section className="empty-conversation" aria-labelledby="empty-title">
      <div className="empty-illustration" aria-hidden="true">
        <MessagesSquare size={64} strokeWidth={1.5} />
      </div>
      <h2 id="empty-title">Tus mensajes, siempre cerca</h2>
      <p>
        Elegí una conversación para comenzar. Nexo Chat mantiene tus datos en
        este dispositivo para esta demostración.
      </p>
      <span className="privacy-note">
        <LockKeyhole size={14} aria-hidden="true" /> Demostración educativa
      </span>
    </section>
  )
}

export default EmptyConversation
