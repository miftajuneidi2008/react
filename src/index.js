import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './component/Header'
import Main from './component/Main';
import Contact from './component/contact'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='main'>
    <Header />
    <Main />
    <Contact />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
