import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCkpvhGP1ShY77F6gBlLGrQKefT543Fqn0",
  authDomain: "e-ride-d34f0.firebaseapp.com",
  projectId: "e-ride-d34f0",
  storageBucket: "e-ride-d34f0.appspot.com",
  messagingSenderId: "598186838590",
  appId: "1:598186838590:web:edf63ddae8c64759a11f6f"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
