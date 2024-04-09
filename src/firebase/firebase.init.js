// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.INIT_APIKEY,
  authDomain: import.meta.env.INIT_AUTHDOMAIN,
  projectId: import.meta.env.INIT_PROJECTID,
  storageBucket: import.meta.env.INIT_STORAGEBUCKET,
  messagingSenderId: import.meta.env.INIT_MESSAGINGSENDERID,
  appId: import.meta.env.INIT_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth