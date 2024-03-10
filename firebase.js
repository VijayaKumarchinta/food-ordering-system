import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyD7n9XOB03GZKWJVyXS1s7YI0ret36yG24",
    authDomain: "foodordering-7bec0.firebaseapp.com",
    projectId: "foodordering-7bec0",
    storageBucket: "foodordering-7bec0.appspot.com",
    messagingSenderId: "298967070575",
    appId: "1:298967070575:web:67c69b76191320013e5a9a",
    measurementId: "G-CYJXJD4SET"
  };
  


const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export {app,auth,provider};