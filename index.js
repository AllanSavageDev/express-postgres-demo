const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 8000;

// Middleware to parse JSON
app.use(express.json());

// Connect to Postgres
const pool = new Pool({
  user: 'postgres',
  host: 'db',        // IMPORTANT: 'db' matches Docker Compose service name
  database: 'postgres',
  password: 'secret',
  port: 5432,
});

// Health Check
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Get all messages
app.get('/messages', async (req, res) => {
  const result = await pool.query('SELECT id, content FROM messages ORDER BY id;');
  res.json(result.rows);
});

// Create a new message
app.post('/messages', async (req, res) => {
  const { content } = req.body;
  const result = await pool.query(
    'INSERT INTO messages (content) VALUES ($1) RETURNING id;',
    [content]
  );
  res.json({ id: result.rows[0].id, content });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
