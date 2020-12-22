import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/analytics';
import 'firebase/auth';


const firebaseConfig = {
  // these are not important to hide, firestore security other ways; but best practice is to use .env
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    appId: process.env.REACT_APP_MESSAGING_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
  };


  firebase.initializeApp(firebaseConfig)

  firebase.analytics();

  export default firebase;

