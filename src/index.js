import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


//serviceWorker.unregister();
reportWebVitals();
