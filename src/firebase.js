import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDc7a7gTPZE2Q1Dq0AvV56CGQOGOWcWOjk",
  authDomain: "subasta-de-hashiban.firebaseapp.com",
  projectId: "subasta-de-hashiban",
  storageBucket: "subasta-de-hashiban.appspot.com",
  messagingSenderId: "895432076877",
  appId: "1:895432076877:web:1fa44b473a4a8f979b7604",
  measurementId: "G-SNZB6CHWXN",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
