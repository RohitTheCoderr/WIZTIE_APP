import React, { useState } from 'react';
import { MdSend } from "react-icons/md";
const MessageInput = ({ addMessage }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (inputValue.trim()) {
      addMessage(inputValue, 'user');
      setInputValue('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="flex items-center p-2 border-t border-gray-300">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
        className="flex-1 p-2 border rounded-lg"
        placeholder="Type a message..."
      />
      <button
        onClick={handleSend}
        className="ml-2 p-2 bg-[#55AD9B] text-white rounded-lg"
        disabled={!inputValue.trim()}
      >
        <MdSend className='text-xl'/>
      </button>
    </div>
  );
};

export default MessageInput;
