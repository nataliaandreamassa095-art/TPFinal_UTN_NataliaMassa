import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import AppShell from './components/AppShell.jsx'
import ChatProvider from './context/ChatProvider.jsx'
import PreferencesProvider from './context/PreferencesProvider.jsx'
import ChatsPage from './pages/ChatsPage.jsx'
import ConversationPage from './pages/ConversationPage.jsx'
import NewContactPage from './pages/NewContactPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

function App() {
  return (
    <PreferencesProvider>
      <ChatProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<AppShell />}>
              <Route index element={<Navigate to="/chats" replace />} />
              <Route path="chats" element={<ChatsPage />} />
              <Route path="chat" element={<ConversationPage />} />
              <Route path="contacts/new" element={<NewContactPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </ChatProvider>
    </PreferencesProvider>
  )
}

export default App
