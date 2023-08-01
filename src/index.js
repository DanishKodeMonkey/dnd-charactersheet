import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'
import 'bootstrap/dist/css/bootstrap.css';


// Get app from HTML
const domNode = document.getElementById('root');

// create a root
const root = createRoot(domNode);

//render app to root
root.render(<App />);