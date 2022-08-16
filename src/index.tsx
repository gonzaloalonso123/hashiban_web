import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Home from './Home';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDc7a7gTPZE2Q1Dq0AvV56CGQOGOWcWOjk",
  authDomain: "subasta-de-hashiban.firebaseapp.com",
  projectId: "subasta-de-hashiban",
  storageBucket: "subasta-de-hashiban.appspot.com",
  messagingSenderId: "895432076877",
  appId: "1:895432076877:web:1fa44b473a4a8f979b7604",
  measurementId: "G-SNZB6CHWXN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
