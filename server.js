const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const energyRoutes = require('./routes/energy');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/energy', energyRoutes);

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => console.error(err));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
