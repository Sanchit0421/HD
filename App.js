// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import EnergyDetails from './EnergyDetails'; // New component for energy details

const App = () => {
    // Mock energy usage data
    const energyData = [
        { device: 'Living Room Light', usage: 120 },
        { device: 'Refrigerator', usage: 200 },
        { device: 'Air Conditioner', usage: 350 },
    ];

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Dashboard energyData={energyData} />
                </Route>
                <Route path="/energy-details">
                    <EnergyDetails energyData={energyData} />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
