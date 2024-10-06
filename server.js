const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Route for the root path
app.get('/', (req, res) => {
    res.send('Welcome to the Chameleon Smart Energy Dashboard API!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

