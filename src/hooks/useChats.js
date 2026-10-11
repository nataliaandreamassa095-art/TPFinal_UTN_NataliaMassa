import { useContext } from 'react'
import ChatContext from '../context/chatContext.js'

function useChats() {
  const context = useContext(ChatContext)

  if (!context) {
    throw new Error('useChats debe utilizarse dentro de ChatProvider')
  }

  return context
}

export default useChats
