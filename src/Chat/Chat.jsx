import React, { useState } from 'react';
import PP from '../assets/pp.png';

const Chat = () => {
    // Ambil data dari localStorage saat inisialisasi
    const [messages, setMessages] = useState(() => {
        const savedMessages = localStorage.getItem('chatMessages');
        return savedMessages ? JSON.parse(savedMessages) : [];
    });
    
    const [message, setMessage] = useState("");

    const sendMessage = () => {
        if (message.trim()) {
            const newMessages = [...messages, {
                text: message,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                sender: 'user'
            }];
            
            setMessages(newMessages);
            localStorage.setItem('chatMessages', JSON.stringify(newMessages));
            setMessage("");
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    }

    return (
        <div className="flex flex-col h-screen bg-gray-100">
            {/* Chat Header */}
            <div className="bg-blue-600 text-white p-4 shadow-md">
                <h1 className="text-xl font-bold">Chat with Orang Keren</h1>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3">
                {messages.map((msg, index) => (
                    <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : ''}`}>
                        <div className={`w-full max-w-md ${msg.sender === 'user' ? 'flex flex-col items-end' : ''}`}>
                            {msg.sender !== 'user' && (
                                <div className="flex items-center mb-1">
                                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-2 overflow-hidden">
                                        <img src={PP} alt="Profile" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex items-center">
                                        <h2 className="font-semibold mr-1">Orang Keren</h2>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                            )}
                            <div className={`rounded-lg p-3 shadow-sm border ${msg.sender === 'user' ? 'bg-blue-500 text-white border-blue-600' : 'bg-white text-gray-800 border-gray-200'}`}>
                                {msg.text}
                                <span className={`text-xs flex justify-end ${msg.sender === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
                                    {msg.time}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-gray-300">
                <div className="flex space-x-2">
                    <input
                        type="text"
                        className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={message}
                        placeholder="Type your message..."
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                    <button
                        onClick={sendMessage}
                        className="px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Chat;