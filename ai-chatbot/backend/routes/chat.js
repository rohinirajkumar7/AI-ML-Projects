const express = require('express');
const router = express.Router();
const OPENROUTER_BASE = 'https://openrouter.ai/api/v1/chat/completions';

const API_KEY = process.env.OPENROUTER_API_KEY;
if (!API_KEY) {
  console.warn('WARNING: OPENROUTER_API_KEY not set. Add it to your .env');
}

// Basic POST /api/chat
// Body: { messages: [{role:"user", content:"..."}, ...], model: "meta-llama/llama-4-scout", temperature?:0.7 }
router.post('/', async (req, res) => {
  try {
    const { messages, model = 'meta-llama/llama-4-scout', temperature = 0.2, max_tokens = 1024 } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'messages (array) is required in body' });
    }
    if (!API_KEY) return res.status(500).json({ error: 'OPENROUTER_API_KEY not configured on server' });

    const payload = {
      model,
      messages,
      temperature,
      max_tokens
    };

    // use global fetch (Node 18+) or node-fetch
    const fetch = global.fetch;


    const r = await fetch(OPENROUTER_BASE, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
      body: JSON.stringify(payload)
    });

    if (!r.ok) {
      const text = await r.text();
      console.error('OpenRouter error:', r.status, text);
      return res.status(502).json({ error: 'Upstream error from OpenRouter', status: r.status, body: text });
    }

    const data = await r.json();
    // Return the raw OpenRouter response so frontend can choose formatting
    return res.json(data);
  } catch (err) {
    console.error('Server error', err);
    return res.status(500).json({ error: 'server_error', message: err.message });
  }
});

module.exports = router;
