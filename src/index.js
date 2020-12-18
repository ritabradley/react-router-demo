import React from 'react';
import { render } from 'react-dom';
import App from './containers/App';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';

const root = document.getElementById('root');

render(
    <Router>
        <App />
    </Router>,
    root
);
