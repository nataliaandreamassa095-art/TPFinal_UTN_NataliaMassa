import { useMemo } from 'react'

function useChatSearch(chats, query, filter) {
  return useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase('es-AR')

    return chats.filter((chat) => {
      const lastMessage = chat.messages.at(-1)?.text ?? ''
      const matchesQuery =
        !normalizedQuery ||
        chat.name.toLocaleLowerCase('es-AR').includes(normalizedQuery) ||
        lastMessage.toLocaleLowerCase('es-AR').includes(normalizedQuery)

      const matchesFilter =
        filter === 'all' ||
        (filter === 'unread' && chat.unread > 0) ||
        (filter === 'favorites' && chat.favorite)

      return matchesQuery && matchesFilter
    })
  }, [chats, filter, query])
}

export default useChatSearch
