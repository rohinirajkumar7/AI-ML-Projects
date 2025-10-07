\# 🤖 AI Chatbot



> 💬 A modern conversational AI chatbot powered by Meta's Llama 4 Scout model



An intelligent chatbot application built with React and Node.js that provides real-time AI-powered conversations for daily tasks, programming help, math, and reasoning.



---



\## ✨ Features



\- 💬 Real-time conversational AI interface

\- 🎨 Clean, modern dark theme UI

\- ⚡ Fast response times with streaming support

\- 🔒 Secure API key management

\- 📱 Responsive design

\- 🧠 Powered by Meta's Llama 4 Scout



---



\## 🛠️ Tech Stack



\### Frontend

\- ⚛️ React 18 - UI library

\- ⚡ Vite - Build tool

\- 🎨 Tailwind CSS - Styling

\- 🎯 Lucide React - Icons

\- 📡 Axios - HTTP client



\### Backend

\- 🟢 Node.js - Runtime environment

\- 🚀 Express.js - Web framework

\- 🌐 CORS - Cross-origin handling

\- 🔐 dotenv - Environment variables



\### AI Model

\- 🦙 Meta Llama 4 Scout (via OpenRouter)

\- 🔮 Model: meta-llama/llama-4-scout:free

\- 🆓 Free tier with generous rate limits



---



\## 🚀 Quick Start



\### 📋 Prerequisites



\- 🟢 Node.js v18 or higher

\- 📦 npm or yarn

\- 🔑 OpenRouter API key (free at https://openrouter.ai/)



\### 📥 Installation



1\. Clone the repository 📂



cd ai-chatbot





2\. Backend Setup 🔧



cd backend

npm install



Create a .env file in the backend folder:



OPENROUTER\_API\_KEY=your\_api\_key\_here



Start the backend server:



npm start





3\. Frontend Setup 🎨



Open a new terminal:



cd frontend

npm install

npm run dev





4\. Open your browser 🌐



Navigate to: http://localhost:5173



---



\## 📁 Project Structure



ai-chatbot/

│

├── backend/

│   ├── routes/

│   │   └── chat.js              # 🛣️ API route for chat

│   ├── server.js                # 🖥️ Express server

│   ├── package.json

│   └── .env                     # 🔐 Environment variables (create this)

│

└── frontend/

&nbsp;   ├── src/

&nbsp;   │   ├── components/

&nbsp;   │   │   ├── ChatWindow.jsx   # 💬 Chat messages display

&nbsp;   │   │   └── ChatInput.jsx    # ⌨️ User input field

&nbsp;   │   ├── styles/

&nbsp;   │   │   └── index.css        # 🎨 Global styles

&nbsp;   │   ├── App.jsx              # 📱 Main app component

&nbsp;   │   └── main.jsx             # 🚪 Entry point

&nbsp;   ├── index.html

&nbsp;   ├── vite.config.mjs

&nbsp;   ├── tailwind.config.cjs

&nbsp;   └── package.json



---



\## 🔑 Getting Your OpenRouter API Key



1\. 🌐 Go to https://openrouter.ai/

2\. 📝 Sign up for a free account

3\. 🔍 Navigate to API Keys section

4\. ✨ Generate a new API key

5\. 📋 Copy and paste it into your backend/.env file



Note: 💡 The free tier of meta-llama/llama-4-scout:free is sufficient for development and testing.



---



\## 💡 Usage



1\. ⌨️ Type your message in the input field at the bottom

2\. 📤 Press Enter or click the Send button

3\. ⏳ Wait for the AI to generate a response

4\. 🔄 Continue the conversation naturally



Example queries: 🎯

\- Explain how React hooks work

\- Write a Python function to sort an array

\- What is the capital of France?

\- Help me debug this JavaScript error



---



\## ⚙️ Configuration



\### Backend (backend/.env) 🔧



OPENROUTER\_API\_KEY=your\_api\_key\_here

PORT=4000





\### Frontend 🎨



The frontend is configured to connect to http://localhost:4000 by default.



---



\## 🐛 Troubleshooting



Blank screen on frontend: 🖥️

\- Check browser console for errors (F12)

\- Ensure both backend and frontend servers are running

\- Verify CORS is enabled in backend



API errors: ⚠️

\- Verify your OpenRouter API key is correct

\- Check if you have API credits/rate limits remaining

\- Ensure backend .env file is properly configured



Port already in use: 🚫



Windows:

netstat -ano | findstr :4000

taskkill /PID <PID> /F



Or use:

npx kill-port 4000 5173



---



\## 🤝 Contributing



Contributions are welcome! Feel free to:

\- 🐛 Report bugs

\- 💡 Suggest new features

\- 🔧 Submit pull requests



---



\## 📄 License



This project is open source and available under the MIT License.



---



\## 🙏 Acknowledgments



\- 🦙 Meta AI for the Llama 4 Scout model

\- 🔮 OpenRouter for API access

\- ⚛️ React and Vite communities



---



⭐ If you find this project helpful, consider giving it a star on GitHub!

