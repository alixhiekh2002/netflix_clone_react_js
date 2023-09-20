import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyA8kXrpVfcyej1M6s7G2uuH8u2Aj92JbDg",
  authDomain: "netflix-clone-js-a7c22.firebaseapp.com",
  projectId: "netflix-clone-js-a7c22",
  storageBucket: "netflix-clone-js-a7c22.appspot.com",
  messagingSenderId: "1006771831532",
  appId: "1:1006771831532:web:995fdffa1d05c19fd89bc9"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { auth, createUserWithEmailAndPassword };
export default db;
  