// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebase = {
  apiKey: "AIzaSyDEzW0Rg7EBXJWYefOuF3bVigBydFDhNGw",
  authDomain: "diplom-200f7.firebaseapp.com",
  databaseURL:"https://diplom-200f7-default-rtdb.firebaseio.com/",
  projectId: "diplom-200f7",
  storageBucket: "diplom-200f7.appspot.com",
  messagingSenderId: "162864476703",
  appId: "1:162864476703:web:c59f42c0c1d58315ea5b2a"
};

// Initialize Firebase
const app = initializeApp(firebase);
const auth = getAuth(app);

export default app;
export {auth}