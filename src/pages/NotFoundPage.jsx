import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <main className="not-found-page">
      <p className="error-code">404</p>
      <h1>Esta página no existe</h1>
      <p>La dirección puede estar incompleta o haber cambiado.</p>
      <Link className="primary-link" to="/chats">Ir a Nexo Chat</Link>
    </main>
  )
}

export default NotFoundPage
