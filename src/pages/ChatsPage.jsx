import EmptyConversation from '../components/EmptyConversation.jsx'

function ChatsPage() {
  return (
    <main className="workspace">
      <aside className="conversation-list placeholder-list" aria-label="Conversaciones">
        <header className="list-header">
          <div>
            <span className="eyebrow">Mensajería</span>
            <h1>Conversaciones</h1>
          </div>
        </header>
        <p className="muted-copy">Tus chats aparecerán en esta sección.</p>
      </aside>
      <EmptyConversation />
    </main>
  )
}

export default ChatsPage
