import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import
import App from './App';
import './style.css';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement); // Create a root.

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
