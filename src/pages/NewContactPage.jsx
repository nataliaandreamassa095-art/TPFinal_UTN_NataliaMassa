import { Link } from 'react-router-dom'

function NewContactPage() {
  return (
    <main className="simple-page">
      <span className="eyebrow">Contactos</span>
      <h1>Nueva conversación</h1>
      <p>Desde aquí se podrá crear un contacto y comenzar a conversar.</p>
      <Link className="primary-link" to="/chats">Cancelar</Link>
    </main>
  )
}

export default NewContactPage
