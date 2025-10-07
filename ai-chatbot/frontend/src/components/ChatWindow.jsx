import React, { useRef, useEffect } from 'react';
import { Bot, User } from 'lucide-react';

const TypingIndicator = () => (
  <div className="flex items-center gap-2">
    <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center flex-shrink-0">
      <Bot className="text-white" />
    </div>
    <div className="bg-slate-700 px-4 py-3 rounded-xl flex items-center gap-1">
      <span className="h-2 w-2 bg-slate-400 rounded-full animate-bounce delay-0"></span>
      <span className="h-2 w-2 bg-slate-400 rounded-full animate-bounce delay-150"></span>
      <span className="h-2 w-2 bg-slate-400 rounded-full animate-bounce delay-300"></span>
    </div>
  </div>
);

export default function ChatWindow({ messages, loading }) {
  const scrollRef = useRef();

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, loading]);

  return (
    <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-6 my-4">
      {messages.map((m, i) => {
        if (m.role === 'system') return null; // Don't render system messages
        const isUser = m.role === 'user';
        return (
          <div key={i} className={`flex items-start gap-3 ${isUser ? 'flex-row-reverse' : ''}`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${isUser ? 'bg-blue-600' : 'bg-slate-700'}`}>
              {isUser ? <User /> : <Bot />}
            </div>
            <div className={`max-w-[80%] p-4 rounded-xl whitespace-pre-wrap ${isUser ? 'bg-blue-600 rounded-br-none' : 'bg-slate-700 rounded-bl-none'}`}>
              {m.content}
            </div>
          </div>
        );
      })}
      {loading && <TypingIndicator />}
    </div>
  );
}