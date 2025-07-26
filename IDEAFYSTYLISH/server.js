const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files (HTML, CSS, JS, images) from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Default route (if needed)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'teams.html')); // Change if your file name is different
});

// Start server
app.listen(PORT, () => {
  console.log(`✨ IDEAFY server running at: http://127.0.0.1:${PORT}`);
});
