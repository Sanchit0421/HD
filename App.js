// src/App.js
import React from 'react';
import Dashboard from './Dashboard';

const App = () => {
    // Mock energy usage data
    const energyData = [
        { device: 'Living Room Light', usage: 120 },
        { device: 'Refrigerator', usage: 200 },
        { device: 'Air Conditioner', usage: 350 },
    ];

    return (
        <div>
            <Dashboard energyData={energyData} />
        </div>
    );
};

export default App;
