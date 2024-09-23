import ChatWindow from '@/components/chatWindow/Chatwindow'
import MyConnections from '@/components/myConnections/MyConnections'

function ChatWithCommections() {
  return (
    <div className=' overflow-scroll scrollbar-hide flex flex-wrap px-2 gap-6 pt-12'>
        <MyConnections/>
        <ChatWindow/>
    </div>
  )
}

export default ChatWithCommections