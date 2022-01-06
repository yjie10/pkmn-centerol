import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyC0b0F31tS_p2ZBx16ROUSCPBF3CwCCjtc",
  authDomain: "pkmn-centerol.firebaseapp.com",
  projectId: "pkmn-centerol",
  storageBucket: "pkmn-centerol.appspot.com",
  messagingSenderId: "371854459025",
  appId: "1:371854459025:web:a1b2e68052a1cb2c323f30",
  measurementId: "G-CH48GBYGY6"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// in case we want the whole library
export default firebase;