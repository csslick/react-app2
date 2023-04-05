import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// App 모듈(컴퍼넌트)을 가져옴
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


