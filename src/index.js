import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';  // تعديل هنا: استبدال BrowserRouter بـ HashRouter

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>  {/* تعديل هنا: استخدام HashRouter */}
    <App />
  </HashRouter>
);

reportWebVitals();
