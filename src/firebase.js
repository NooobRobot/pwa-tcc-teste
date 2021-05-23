import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCertxFskohhGyqnCdVPfj0Yq2p3W6Flkc",
  authDomain: "esucri-2c4d4.firebaseapp.com",
  projectId: "esucri-2c4d4",
  storageBucket: "esucri-2c4d4.appspot.com",
  messagingSenderId: "731493602802",
  appId: "1:731493602802:web:efb46201ea35f2e8aa076b"
};


firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth  = firebase.auth();
export const storage = firebase.storage();
