import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // ✅ ADD THIS


import '@/index.css';
import App from '@/App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter> {/* ✅ Wrap App in Router */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
