import { useCallback, useMemo } from 'react'
import { initialChats } from '../data/initialChats.js'
import useLocalStorage from '../hooks/useLocalStorage.js'
import ChatContext from './chatContext.js'

function ChatProvider({ children }) {
  const [chats, setChats] = useLocalStorage('nexo-chat-conversations', initialChats)

  const sendMessage = useCallback((chatId, text) => {
    const cleanText = text.trim()
    if (!cleanText) return

    const now = new Date()
    const time = new Intl.DateTimeFormat('es-AR', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }).format(now)

    setChats((currentChats) =>
      currentChats.map((chat) =>
        chat.id === chatId
          ? {
              ...chat,
              messages: [
                ...chat.messages,
                {
                  id: `${chatId}-${now.getTime()}`,
                  text: cleanText,
                  direction: 'out',
                  time,
                  read: true,
                },
              ],
            }
          : chat,
      ),
    )
  }, [setChats])

  const markAsRead = useCallback((chatId) => {
    setChats((currentChats) =>
      currentChats.map((chat) =>
        chat.id === chatId && chat.unread > 0 ? { ...chat, unread: 0 } : chat,
      ),
    )
  }, [setChats])

  const addContact = useCallback((contact) => {
    const normalizedName = contact.name.trim()
    const idBase = normalizedName
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')
    const id = `${idBase || 'contacto'}-${Date.now().toString().slice(-5)}`
    const initials = normalizedName
      .split(/\s+/)
      .slice(0, 2)
      .map((word) => word[0])
      .join('')
      .toUpperCase()

    setChats((currentChats) => [
      {
        id,
        name: normalizedName,
        phone: contact.phone.trim(),
        initials,
        color: contact.color,
        status: 'nuevo contacto',
        favorite: contact.favorite,
        unread: 0,
        messages: [
          {
            id: `${id}-welcome`,
            text: `Creaste una conversación con ${normalizedName}.`,
            direction: 'system',
            time: 'Ahora',
          },
        ],
      },
      ...currentChats,
    ])

    return id
  }, [setChats])

  const value = useMemo(
    () => ({ chats, sendMessage, markAsRead, addContact }),
    [addContact, chats, markAsRead, sendMessage],
  )

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>
}

export default ChatProvider
