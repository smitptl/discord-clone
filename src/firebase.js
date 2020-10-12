// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCVAoDlJebgJNJKGP_pU7lm5guLiHBiiWY",
  authDomain: "discord-clone-23362.firebaseapp.com",
  databaseURL: "https://discord-clone-23362.firebaseio.com",
  projectId: "discord-clone-23362",
  storageBucket: "discord-clone-23362.appspot.com",
  messagingSenderId: "431943885890",
  appId: "1:431943885890:web:2ffa5d7d0a4e3bc847b9db",
  measurementId: "G-G6Y80C95WP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider };
export default db;