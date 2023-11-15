// import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const fireb// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCGMqIdUqROmxdu_6zN-cP9PVWrjy3Wf4E",
  authDomain: "challenge-db77a.firebaseapp.com",
  projectId: "challenge-db77a",
  storageBucket: "challenge-db77a.appspot.com",
  messagingSenderId: "66397573172",
  appId: "1:66397573172:web:2f3ac9af0e811e19327a61",
  measurementId: "G-ZQLFF9LSKQ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, analytics };