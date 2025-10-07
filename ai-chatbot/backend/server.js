require('dotenv').config();
const express = require('express');
const cors = require('cors');
const chatRoute = require('./routes/chat');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({
  origin: 'http://localhost:5173' // frontend dev origin — update for production
}));
app.use(express.json({ limit: '1mb' }));

app.use('/api/chat', chatRoute);

app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'AI chatbot backend' });
});

app.listen(PORT, () => {
  console.log(`Backend listening on http://localhost:${PORT}`);
});
