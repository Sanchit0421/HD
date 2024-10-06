const express = require('express');
const router = express.Router();

// Mock data for energy usage
const energyUsage = [
    { device: 'Living Room Light', usage: 120 },
    { device: 'Refrigerator', usage: 200 },
    { device: 'Air Conditioner', usage: 350 },
];

// Route to get energy usage
router.get('/', (req, res) => {
    res.json(energyUsage);
});

module.exports = router;
