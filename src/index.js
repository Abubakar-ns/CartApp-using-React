import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';
import 'firebase/firestore';
  // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAoZdcszewmgwSUs7Wn3MTLZOWt63COgCE",
    authDomain: "cart-fc5b2.firebaseapp.com",
    projectId: "cart-fc5b2",
    storageBucket: "cart-fc5b2.appspot.com",
    messagingSenderId: "720972943442",
    appId: "1:720972943442:web:49b51d85f9ed234ad48f8b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
