import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Make sure this points to the correct file
import './index.css'; // If you have a CSS file

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
