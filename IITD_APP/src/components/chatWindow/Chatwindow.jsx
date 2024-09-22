import React, { useState, useRef, useEffect } from 'react';
import MessageInput from '../messageInput/MessageInput';

const ChatWindow = () => {
  const [messages, setMessages] = useState([
    { text: 'Hello!', sender: 'user' },
    { text: 'Hi there!', sender: 'friend' },
  ]);

  const messagesEndRef = useRef(null);
  const [newMessage, setNewMessage] = useState(false); // State to track new messages

  const addMessage = (text, sender) => {
    setMessages((prevMessages) => [...prevMessages, { text, sender }]);
    setNewMessage(true); // Indicate that a new message has been added

    // If the user sends a message, trigger the bot response
    if (sender === 'user') {
      setTimeout(() => {
        const botResponse = getBotResponse(text);
        setMessages((prevMessages) => [...prevMessages, { text: botResponse, sender: 'bot' }]);
        setNewMessage(true); // Indicate that a new message from the bot has been added
      }, 1000); // Delay to simulate typing
    }
  };

  const getBotResponse = (userMessage) => {
    // Simple bot logic
    if (userMessage.toLowerCase().includes('hello')) {
      return 'Hi there! How can I help you today?';
    } else if (userMessage.toLowerCase().includes('how are you')) {
      return 'I am just a bot, but I am doing great! How about you?';
    } else if (userMessage.toLowerCase().includes('bye')) {
      return 'Goodbye! Have a nice day!';
    } else {
      return 'I am sorry, I did not understand that.';
    }
  };

  useEffect(() => {
    // Scroll to the bottom of the chat only when a new message is added
    if (newMessage && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
      setNewMessage(false); // Reset newMessage state after scrolling
    }
  }, [messages, newMessage]);

  return (
    <div className="flex flex-col my-0  m-auto border-2 h-[35rem] w-[50%] overflow-hidden rounded-2xl bg-slate-100">
      <h2 className="text-xl text-center">Chat Bot</h2>
      <div className="flex-1 overflow-y-auto p-4 border-2">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-4 flex ${
              message.sender === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`p-2 rounded-lg max-w-xs ${
                message.sender === 'user' ? 'bg-[#55AD9B] text-white' : 'bg-gray-300 text-black'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <MessageInput addMessage={addMessage} />
    </div>
  );
};

export default ChatWindow;








// import React, { useState, useRef, useEffect } from 'react';
// import MessageInput from '../messageInput/MessageInput';

// const ChatWindow = () => {
//   const [messages, setMessages] = useState([
//     { text: 'Hello!', sender: 'user' },
//     { text: 'Hi there!', sender: 'friend' },
//   ]);

//   const messagesEndRef = useRef(null);
//   const addMessage = (text, sender) => {
//     setMessages([...messages, { text, sender }]);
//   };

//   useEffect(() => {
//     // Scroll to the bottom of the chat when a new message is added
//     if (messagesEndRef.current) {
//       messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
//     }
//   }, [messages]);

//   return (
//     <div className="flex flex-col my-12 w-[30rem] m-auto border-2 h-[30rem] overflow-hidden">
//       <h2 className='text-xl text-center'>Chat message</h2>
//       <div className="flex-1 overflow-y-auto p-4 border-2">
//         {messages.map((message, index) => (
//           <div
//             key={index}
//             className={`mb-4 flex ${
//               message.sender === 'user' ? 'justify-end' : 'justify-start'
//             }`}
//           >
//             <div
//               className={`p-2 rounded-lg max-w-xs ${
//                 message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'
//               }`}
//             >
//               {message.text}
//             </div>
//           </div>
//         ))}
//         <div ref={messagesEndRef} />
//       </div>
//       <MessageInput addMessage={addMessage} />
//     </div>
//   );
// };

// export default ChatWindow;
