import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyBmV4dvDYo3y7gk3TQtle5o4fyQEr_c6co",
  authDomain: "messenger-86d4a.firebaseapp.com",
  projectId: "messenger-86d4a",
  storageBucket: "messenger-86d4a.appspot.com",
  messagingSenderId: "309708282684",
  appId: "1:309708282684:web:5868ae29ed99a15f201c39",
  measurementId: "G-BGZCL90YNX"
});

const db = firebase.firestore();
export default db;