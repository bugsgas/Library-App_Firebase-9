import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDPj74C78-E-d8Fniwb0PeDXtWzY_tSd0s",
  authDomain: "authentication-9-15297.firebaseapp.com",
  projectId: "authentication-9-15297",
  storageBucket: "authentication-9-15297.appspot.com",
  messagingSenderId: "712619860437",
  appId: "1:712619860437:web:ce9310fee4b580a780dd5c"
};

//init firebase
initializeApp(firebaseConfig)

//init firestore
const db = getFirestore()

//init firebase auth
const auth = getAuth()

export { db, auth }