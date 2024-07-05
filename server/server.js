const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const taskRoutes = require('./routes/task'); // Import task routes
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 5000; // Use the PORT from .env file or default to 5000

// Use CORS to allow cross-origin requests
app.use(cors({
  origin: 'http://tmacrud.vercel.app' // Allow requests from this origin
}));

// Middleware to parse JSON requests
app.use(bodyParser.json());

// MongoDB connection string from .env file
const mongoURI = process.env.MONGO_URI; // Use the MONGO_URI from .env file

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Use task routes
app.use('/tasks', taskRoutes);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
