import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import ChatWindow from '../components/ChatWindow.jsx'
import ConversationList from '../components/ConversationList.jsx'
import useChats from '../hooks/useChats.js'

function ConversationPage() {
  const [searchParams] = useSearchParams()
  const chatId = searchParams.get('contacto')
  const { markAsRead } = useChats()

  useEffect(() => {
    if (chatId) markAsRead(chatId)
  }, [chatId, markAsRead])

  return (
    <main className="workspace conversation-workspace">
      <ConversationList />
      <ChatWindow chatId={chatId} />
    </main>
  )
}

export default ConversationPage
