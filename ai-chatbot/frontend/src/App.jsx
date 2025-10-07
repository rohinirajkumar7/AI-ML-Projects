import React, { useState } from 'react';
import ChatWindow from './components/ChatWindow';
import ChatInput from './components/ChatInput';
import { Bot, Cpu } from 'lucide-react'; // A lightweight icon library

export default function App() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hi! I'm your virtual assistant. I can help with daily tasks, maths, reasoning, and programming. How can I help you today?" }
  ]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (userText) => {
    const newMessages = [...messages, { role: 'user', content: userText }];
    setMessages(newMessages);
    setLoading(true);

    try {
      const resp = await fetch('http://localhost:4000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages,
          model: 'meta-llama/llama-4-scout',
          temperature: 0.2
        })
      });
      const data = await resp.json();
      const assistantMsg = data?.choices?.[0]?.message?.content || JSON.stringify(data);
      setMessages([...newMessages, { role: 'assistant', content: assistantMsg }]);
    } catch (err) {
      console.error(err);
      setMessages([...newMessages, { role: 'assistant', content: 'Error: Could not reach the backend. Please ensure it is running.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center font-sans">
      <div className="w-full max-w-3xl h-[85vh] bg-slate-800 rounded-2xl shadow-2xl p-4 flex flex-col">
        <header className="flex items-center justify-between border-b border-slate-600 pb-3">
          <div className="flex items-center gap-3">
            <Bot size={32} className="text-pink-400" />
            <h1 className="text-xl font-semibold">AI Assistant</h1>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <Cpu size={16} />
            <span>meta-llama/llama-4-scout</span>
          </div>
        </header>
        <ChatWindow messages={messages} loading={loading} />
        <ChatInput onSend={sendMessage} disabled={loading} />
      </div>
    </div>
  );
}