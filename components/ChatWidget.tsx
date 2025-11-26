import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { generateChatResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hello! I am the Ample’s Nest AI assistant. How can I help you today?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userText = inputValue.trim();
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsLoading(true);

    try {
      const responseText = await generateChatResponse(userText);
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "I'm having trouble connecting right now.", isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="bg-white rounded-3xl shadow-2xl w-80 sm:w-96 mb-4 flex flex-col border border-stone-100 overflow-hidden animate-fade-in-up" style={{ maxHeight: '500px', height: '60vh' }}>
          {/* Header */}
          <div className="bg-montessori-primary p-4 flex justify-between items-center text-white">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                 <Bot size={18} />
              </div>
              <span className="font-bold font-hand text-lg">School Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 rounded-full p-1 transition">
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-stone-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-montessori-light text-white rounded-tr-sm' 
                      : 'bg-white text-gray-800 border border-gray-100 rounded-tl-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl rounded-tl-sm shadow-sm border border-gray-100 flex space-x-1">
                  <div className="w-2 h-2 bg-montessori-light rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-montessori-light rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-montessori-light rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-stone-100 flex items-center space-x-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask about fees, programs..."
              className="flex-1 border border-gray-200 rounded-full px-5 py-3 text-sm focus:outline-none focus:border-montessori-primary focus:ring-1 focus:ring-montessori-primary bg-stone-50"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !inputValue.trim()}
              className="bg-montessori-primary text-white p-3 rounded-full hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition shadow-md"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${isOpen ? 'bg-montessori-dark' : 'bg-montessori-secondary'} text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center hover:rotate-12`}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={28} />}
      </button>
    </div>
  );
};

export default ChatWidget;