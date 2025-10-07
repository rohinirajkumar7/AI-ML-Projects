import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function ChatInput({ onSend, disabled }) {
  const [text, setText] = useState('');

  const submit = (e) => {
    e?.preventDefault();
    if (!text.trim()) return;
    onSend(text.trim());
    setText('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        submit(e);
    }
  };

  return (
    <form onSubmit={submit} className="flex gap-3 items-center p-2 bg-slate-700 rounded-lg">
      <input
        className="flex-1 bg-transparent border-none p-3 focus:outline-none placeholder-slate-400"
        placeholder="Ask anything..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={disabled}
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center justify-center disabled:bg-slate-500 disabled:cursor-not-allowed transition-colors"
        disabled={disabled || !text.trim()}
      >
        <Send size={20} />
      </button>
    </form>
  );
}