import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import 'react-toastify/dist/ReactToastify.css';
import 'suneditor/dist/css/suneditor.min.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import '@styles/index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
