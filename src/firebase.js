import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCppM1RmgJWM7R2aHkCNWBjICioHPlgpcI",
    authDomain: "choice-free-cooking.firebaseapp.com",
    projectId: "choice-free-cooking",
    storageBucket: "choice-free-cooking.appspot.com",
    messagingSenderId: "728025844311",
    appId: "1:728025844311:web:42d9e52768b14b7fe37112",
    measurementId: "G-R7G4CB0S0Z"
  };

  firebase.initializeApp(firebaseConfig)

  export default firebase;

