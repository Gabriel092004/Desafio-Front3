import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Signin from './pages/Signin';
// import Login from './pages/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Signin />
    {/* <Login /> */}
  </React.StrictMode>
);