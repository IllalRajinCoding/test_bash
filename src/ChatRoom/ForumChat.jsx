import React, { useState, useEffect, useRef } from 'react';
import PP from '../assets/pp.png';
import userProf from "../assets/user.png";
import { motion } from 'framer-motion';

const Forum = () => {
  // Authentication state
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState('');
  const [showLoginPage, setShowLoginPage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState('');

  // Chat state
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedUser = localStorage.getItem('chatUser');
    const savedMessages = localStorage.getItem('chatMessages');

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    } else {
      setUser({
        username: 'Anak Baik',
        role: 'user',
        loggedIn: true
      });
    }

    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);

  // Admin login function
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError('');
    setIsLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      
      if (password === 'illalganteng') {
        const userData = {
          username: 'Illal',
          role: 'admin',
          loggedIn: true
        };

        setUser(userData);
        localStorage.setItem('chatUser', JSON.stringify(userData));
        setShowLoginPage(false);
        setPassword('');
      } else {
        throw new Error('Password admin tidak valid');
      }
    } catch (error) {
      setLoginError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Logout function
  const handleLogout = () => {
    const defaultUser = {
      username: 'Anak Baik',
      role: 'user',
      loggedIn: true
    };
    setUser(defaultUser);
    localStorage.setItem('chatUser', JSON.stringify(defaultUser));
  };

  // Send message function
  const sendMessage = () => {
    if (newMessage.trim() && user) {
      const message = {
        text: newMessage,
        sender: user.username,
        role: user.role,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        id: Date.now() // Add unique ID for better key management
      };

      const updatedMessages = [...messages, message];
      setMessages(updatedMessages);
      localStorage.setItem('chatMessages', JSON.stringify(updatedMessages));
      setNewMessage('');
    }
  };

  // Delete message function (admin only)
  const deleteMessage = (id) => {
    if (user?.role === 'admin') {
      const updatedMessages = messages.filter(msg => msg.id !== id);
      setMessages(updatedMessages);
      localStorage.setItem('chatMessages', JSON.stringify(updatedMessages));
    }
  };

  // Clear all messages function (admin only)
  const clearAllMessages = () => {
    if (user?.role === 'admin' && window.confirm('Yakin ingin menghapus semua pesan?')) {
      setMessages([]);
      localStorage.removeItem('chatMessages');
    }
  };

  // Login Page Component
  if (showLoginPage) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-indigo-900 to-purple-900">
        <motion.div  whileInView={{ opacity: 1, x: 0 }}
              initial={{ x: 100, opacity: 0 }}
              transition={{ duration: 1 }}
        className="backdrop-blur-lg  p-8 rounded-2xl shadow-xl border border-white/10 w-full max-w-md transform transition-all hover:scale-[1.01] duration-300">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-purple-800 flex items-center justify-center text-white text-2xl font-bold">
              <img src={PP} alt="Admin" className="w-full h-full object-cover rounded-full" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-center mb-2 text-white">Admin Login</h1>
          <p className="text-center text-white/60 mb-6">Masukkan password untuk mengakses panel admin</p>
          
          {loginError && (
            <div className="mb-4 p-3 bg-red-500/20 text-red-200 rounded-lg flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {loginError}
            </div>
          )}
          
          <form onSubmit={handleLogin}>
            <div className="mb-5">
              <div className="relative">
                <input
                  type="password"
                  className="w-full p-4 bg-white/5 border border-white/10 rounded-lg focus:outline-none  text-white pl-12"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Masukkan password"
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              </div>
            </div>
            
            <button
              type="submit"
              className={`w-full py-3 px-4 rounded-lg text-white font-medium flex items-center justify-center ${
                isLoading ? 'bg-indigo-600/50 cursor-not-allowed' : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700'
              } transition-all`}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Memproses...
                </>
              ) : 'Login'}
            </button>
            
            <button
              type="button"
              onClick={() => {
                setShowLoginPage(false);
                setLoginError('');
                setPassword('');
              }}
              className="w-full mt-3 bg-transparent text-white/70 py-3 px-4 rounded-lg hover:text-white transition-all flex items-center justify-center"
              disabled={isLoading}
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Kembali ke Chat
            </button>
            
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Header */}
      <header className="bg-black/30 backdrop-blur-md border-b border-white/10 text-white p-4 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Chat App</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm">
                Halo, <span className="font-medium">{user?.username}</span>
              </span>
              {user?.role === 'admin' && (
                <span className="text-xs bg-yellow-500/20 text-yellow-300 px-2 py-0.5 rounded-full flex items-center">
                  <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                  Admin
                </span>
              )}
            </div>
            
            {user?.role === 'admin' ? (
              <button
                onClick={handleLogout}
                className="bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg text-sm transition-all flex items-center"
              >
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Logout
              </button>
            ) : (
              <button
                onClick={() => setShowLoginPage(true)}
                className="bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg text-sm transition-all flex items-center"
              >
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Admin Login
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-4 pb-20">
        <div className="bg-white/5 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-white/10">
          {/* Chat Header */}
          <div className="p-4 border-b border-white/10 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div>
                <h2 className="font-semibold text-white">Chat Room</h2>
                <p className="text-xs text-white/50">
                  {messages.length} pesan • {user?.role === 'admin' ? 'Mode Admin' : 'Mode Pengguna'}
                </p>
              </div>
            </div>
            
            {user?.role === 'admin' && (
              <div className="flex items-center space-x-2">
                <button
                  onClick={clearAllMessages}
                  className="text-xs bg-red-500/20 text-red-300 px-3 py-1.5 rounded-lg hover:bg-red-500/30 transition-all flex items-center"
                  title="Hapus semua pesan"
                >
                  <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  Hapus Semua
                </button>
              </div>
            )}
          </div>

          {/* Message Area */}
          <div className="h-[calc(100vh-220px)] p-4 overflow-y-auto">
            {messages.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-white/70 mb-1">Belum ada pesan</h3>
                <p className="text-sm text-white/40 max-w-xs">Kirim pesan pertama untuk memulai percakapan</p>
              </div>
            ) : (
              <div className="space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === user?.username ? 'justify-end' : 'justify-start'}`}
                  >
                    {msg.sender !== user?.username && (
                      <div className="flex-shrink-0 mr-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center overflow-hidden ${
                          msg.role === 'admin' ? 'border border-yellow-400/30' : 'border border-white/10'
                        }`}>
                          {msg.role === 'admin' ? (
                            <img src={PP} alt="Admin" className="w-full h-full object-cover" />
                          ) : (

                            <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-full h-full flex items-center justify-center text-white text-xs font-bold">
                                <img src={userProf} alt="user" />
                              {msg.sender.charAt(0).toUpperCase()}
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                    
                    <div className={`max-w-xs md:max-w-md lg:max-w-lg ${msg.sender === user?.username ? 'ml-12' : 'mr-12'}`}>
                      {msg.sender !== user?.username && (
                        <div className="flex items-center mb-1">
                          <span className={`text-xs font-medium ${
                            msg.role === 'admin' ? 'text-yellow-300' : 'text-white/80'
                          }`}>
                            {msg.sender}
                            {msg.role === 'admin' && (
                              <span className="ml-1 text-[10px] bg-yellow-500/20 text-blue-500 px-1.5 py-0.5 rounded-full">
                                 <path className='z-10' fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </span>
                            )}
                          </span>
                        </div>
                      )}
                      
                      <div
                        className={`relative p-3 rounded-lg ${
                          msg.sender === user?.username
                            ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-br-none'
                            : msg.role === 'admin'
                              ? 'bg-yellow-500/10 border border-yellow-500/20 text-yellow-100 rounded-bl-none'
                              : 'bg-white/10 text-white rounded-bl-none'
                        }`}
                      >
                        <p className="text-sm">{msg.text}</p>
                        <p className={`text-xs mt-1 text-right ${
                          msg.sender === user?.username
                            ? 'text-blue-200/80'
                            : msg.role === 'admin'
                              ? 'text-yellow-300/70'
                              : 'text-white/50'
                        }`}>
                          {msg.time}
                        </p>
                        
                        {user?.role === 'admin' && (
                          <button
                            onClick={() => deleteMessage(msg.id)}
                            className="absolute -top-2 -right-2 text-xs bg-red-500/90 text-white w-5 h-5 rounded-full hover:bg-red-600 flex items-center justify-center transition-all shadow-sm"
                            title="Hapus pesan"
                          >
                            X
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            )}
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-white/10 bg-black/10">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                className="flex-1 p-3 bg-white/5 border border-white/10 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 placeholder-white/30"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Ketik pesan..."
              />
              <button
                onClick={sendMessage}
                disabled={!newMessage.trim()}
                className={`p-3 rounded-lg flex items-center justify-center ${
                  user?.role === 'admin'
                    ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700'
                    : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700'
                } transition-all shadow-md ${!newMessage.trim() ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Forum;