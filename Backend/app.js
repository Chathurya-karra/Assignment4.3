const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { mongoURI } = require('./config');

const app = express();

// Middleware
app.use(bodyParser.json());

// MongoDB connection
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Failed to connect to MongoDB:', err));

// Hobby routes
const hobbyRoutes = require('./routes/hobbyRoutes');
app.use('/api/hobbies', hobbyRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
