import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import App from './App';

// Stylesheet
import './index.css';

const root = ReactDOM.createRoot(document.querySelector("#main"));
root.render(
    <Router>
        <App />
    </Router>
)