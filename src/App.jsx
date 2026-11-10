import React, { useState } from 'react';

export default function App() {
  const [messages, setMessages] = useState([
    { sender: 'lama', text: 'Greetings, mortal farmer! I am the Eco Agri Lama of the Dark Harvest. What ails your crops tonight?' }
  ]);
  const [input, setInput] = useState('');
  const [soundEnabled, setSoundEnabled] = useState(true);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: 'user', text: input }];
    setMessages(newMessages);
    setInput('');

    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { sender: 'lama', text: 'The spirits whisper of organic neem oil and rich compost under the pale moon. Guard your harvest well!' }
      ]);
    }, 1000);
  };

  return (
    <div style={{ backgroundColor: '#0a0512', color: '#e2e8f0', minHeight: '100vh', fontFamily: 'sans-serif', padding: '16px' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ff7518', paddingBottom: '12px', marginBottom: '16px' }}>
        <h1 style={{ fontSize: '1.25rem', color: '#39ff14', margin: 0 }}>Eco Agri Lama 🎃</h1>
        <button 
          onClick={() => setSoundEnabled(!soundEnabled)} 
          style={{ background: '#ff7518', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '4px', fontWeight: 'bold' }}>
          {soundEnabled ? '🔊 Spooky Sound: ON' : '🔇 Muted'}
        </button>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '80px' }}>
        {messages.map((msg, index) => (
          <div key={index} style={{ 
            alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
            backgroundColor: msg.sender === 'user' ? '#ff7518' : '#1a102f',
            color: msg.sender === 'user' ? '#fff' : '#e2e8f0',
            padding: '10px 14px',
            borderRadius: '8px',
            maxWidth: '85%',
            border: msg.sender === 'lama' ? '1px solid #39ff14' : 'none'
          }}>
            {msg.text}
          </div>
        ))}
      </div>

      <form onSubmit={handleSend} style={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: '#0a0512', padding: '12px', borderTop: '1px solid #1a102f', display: 'flex', gap: '8px' }}>
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Ask your agricultural question..." 
          style={{ flex: 1, padding: '10px', borderRadius: '4px', border: '1px solid #39ff14', backgroundColor: '#1a102f', color: '#fff' }}
        />
        <button type="submit" style={{ backgroundColor: '#39ff14', color: '#0a0512', border: 'none', padding: '10px 16px', borderRadius: '4px', fontWeight: 'bold' }}>
          Send
        </button>
      </form>
    </div>
  );
}
