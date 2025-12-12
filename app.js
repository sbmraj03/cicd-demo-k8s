const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy',
    timestamp: new Date().toISOString()
  });
});

// Main endpoint
app.get('/', (req, res) => {
  res.json({
    message: '🚀 Hello from CI/CD Pipeline!',
    author: 'Sumba',
    version: '1.0.0',
    deployed: 'Automatically via GitHub Actions! ✨'
  });
});

// API endpoint
app.get('/api/status', (req, res) => {
  res.json({
    app: 'DevOps Demo',
    status: 'running',
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development'
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});