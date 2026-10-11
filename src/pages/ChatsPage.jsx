import EmptyConversation from '../components/EmptyConversation.jsx'
import ConversationList from '../components/ConversationList.jsx'

function ChatsPage() {
  return (
    <main className="workspace">
      <ConversationList />
      <EmptyConversation />
    </main>
  )
}

export default ChatsPage
