// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import EnergyDetails from './EnergyDetails';

const App = () => {
    // Updated energy usage data with images
    const energyData = [
        { 
            device: 'Living Room Light', 
            usage: 120, 
            imageUrl: 'https://www.marthastewart.com/thmb/lxfu2-95SWCS0jwciHs1mkbsGUM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/modern-living-rooms-wb-1-bc45b0dc70e541f0ba40364ae6bd8421.jpg' 
        },
        { 
            device: 'Refrigerator', 
            usage: 200, 
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd3ZJolGZ015LBecpUaXmJq8sg7WTDpBD_Dg&s' 
        },
        { 
            device: 'Air Conditioner', 
            usage: 350, 
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy3etf8W6JNk5HBXATbu_xB0G_h-z6iVrscg&s' 
        },
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


