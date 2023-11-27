import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBx5H0jHqy2Hk9aCNDcYq5FFiPURxIKVlo",
  authDomain: "js-firebase-de808.firebaseapp.com",
  projectId: "js-firebase-de808",
  storageBucket: "js-firebase-de808.appspot.com",
  messagingSenderId: "728577774053",
  appId: "1:728577774053:web:25e934d7cac6114c551f0c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
console.log(db);
