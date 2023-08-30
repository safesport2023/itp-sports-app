import React from 'react';
import ReactDOM from 'react-dom'; // Corrected import statement
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Amplify } from 'aws-amplify';
import config from './aws-exports';
import { StrictMode } from 'react';
import Footer from './components/Footer';
// import Header from './components/Header';
// Remove import for createRoot since you're not using it

Amplify.configure(config);

ReactDOM.render(
  <React.StrictMode>

    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
