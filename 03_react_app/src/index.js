import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// 设置移动端的适配-rem
document.documentElement.style.fontSize = 100/750 + 'vw' // 设置视口宽度为750rem

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
);
