import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';

import { ThemeProviderWrapper } from './context/theme.context';    // <== IMPORT

ReactDOM.render(
  <React.StrictMode>
    <Router>
      
      <ThemeProviderWrapper>    {/*  <== ADD  */}
        <App />
      </ThemeProviderWrapper>   {/*  <== ADD  */}

    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();