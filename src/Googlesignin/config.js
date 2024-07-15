
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDE36GurGpyZSq0H-HXYCdr-vzjALcD2Vk",
  authDomain: "react-60e16.firebaseapp.com",
  projectId: "react-60e16",
  storageBucket: "react-60e16.appspot.com",
  messagingSenderId: "359647082275",
  appId: "1:359647082275:web:601116050bab76e51f3e96",
  measurementId: "G-NE49NPELHT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const provider=new GoogleAuthProvider();
export {auth,provider};