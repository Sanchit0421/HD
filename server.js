const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const energyRoutes = require('./energy'); // Import energy.js directly

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the Chameleon Smart Energy Dashboard API!');
});

// Use energy routes
app.use('/api/energy', energyRoutes);

// MongoDB connection (if needed)
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => console.error(err));

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

