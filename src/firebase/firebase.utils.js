import firebase from 'firebase/compat/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBKJmCkS2cOrkTUEZkMY2i5ajcbzuduSmM",
    authDomain: "festival-shreds.firebaseapp.com",
    projectId: "festival-shreds",
    storageBucket: "festival-shreds.appspot.com",
    messagingSenderId: "1043579630999",
    appId: "1:1043579630999:web:a0fdd1575c2a8b31d440d2",
    measurementId: "G-25R6LHSBEG"
  }

  firebase.initializeApp(config)

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider)