// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//import firebase from 'firebase/app';

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
//import 'firebase/firestore'; // or any other Firebase modules you're using


const firebaseConfig = {
    apiKey: "AIzaSyC7rkquRJO_xz7Qg_u-Gnyvs9abfIis3xM",
    authDomain: "twitter-clone-34557.firebaseapp.com",
    projectId: "twitter-clone-34557",
    storageBucket: "twitter-clone-34557.appspot.com",
    messagingSenderId: "432185389806",
    appId: "1:432185389806:web:56bc8aa456fe8695d279ff",
    measurementId: "G-J8VM3V7DNB"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
 
  const db=firebaseApp.firestore();
  export default db;
  