import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    setInput("");

    // 👇 Replace this with your Gemini API call
    const botReply = {
      sender: "bot",
      //text: Reply to "${input}" coming soon via Gemini!,
    };

    setMessages((prev) => [...prev, botReply]);
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-between p-4">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">💬 Baat Cheet</h1>

      <div className="w-full max-w-xl flex-1 overflow-y-auto bg-white shadow-md rounded-lg p-4 space-y-2 mb-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 rounded-lg max-w-[80%] ${
              msg.sender === "user"
                ? "bg-blue-100 self-end text-right ml-auto"
                : "bg-gray-100 self-start text-left"
            }`}
          >
            <p className="text-sm">{msg.text}</p>
          </div>
        ))}
      </div>

      <div className="w-full max-w-xl flex items-center gap-2">
        <input
          type="text"
          className="flex-1 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default App;