const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes'); // Assuming the routes are in routes/userRoutes.js
const app = express();

app.use(express.json()); // For parsing application/json

// Use the user routes
app.use('/api/users', userRoutes);

// Connect to MongoDB (replace with your MongoDB connection string)
mongoose.connect('your_mongodb_connection_string', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
