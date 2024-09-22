import ChatWindow from '@/components/chatWindow/Chatwindow'
import MyConnections from '@/components/myConnections/MyConnections'

function ChatWithCommections() {
  return (
    <div className=' mt-12  flex gap-4 w-full justify-around'>
        <MyConnections/>
        <ChatWindow/>
    </div>
  )
}

export default ChatWithCommections