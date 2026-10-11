import { Link } from 'react-router-dom'

function ConversationPage() {
  return (
    <main className="simple-page">
      <span className="eyebrow">Conversación</span>
      <h1>Chat seleccionado</h1>
      <p>La mensajería interactiva se integrará en el siguiente bloque.</p>
      <Link className="primary-link" to="/chats">Volver a conversaciones</Link>
    </main>
  )
}

export default ConversationPage
