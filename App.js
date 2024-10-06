// Updated App.js after resolving conflicts
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import EnergyDetails from './EnergyDetails';

const App = () => {
    // Updated energy usage data with images
    const energyData = [
        { device: 'Living Room Light', usage: 120, imageUrl: '...' },
        { device: 'Refrigerator', usage: 200, imageUrl: '...' },
        { device: 'Air Conditioner', usage: 350, imageUrl: '...' },
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

