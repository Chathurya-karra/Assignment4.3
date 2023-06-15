const express = require('express');
const bodyParser = require('body-parser');
const hobbyRoutes = require('./routes/hobbyRoutes');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/hobbies', hobbyRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
