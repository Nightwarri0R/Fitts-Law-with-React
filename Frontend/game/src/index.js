import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Button from './components/Button'
import reportWebVitals from './reportWebVitals';



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//ReactDOM.render(
  //<React.StrictMode>
    //< Consent_form />
    //</React.StrictMode>,
  //document.getElementById('consent_form')
//);
// ReactDOM.render(
// <React.StrictMode>
//   <button_to_terms/>
// </React.StrictMode>,
// document.getElementById('consent_form')

// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
