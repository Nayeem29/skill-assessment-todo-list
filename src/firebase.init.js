// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyADjHfcUoUMExmrmqzCLePG52MBdWxnjT8",
  authDomain: "to-do-list-4808a.firebaseapp.com",
  projectId: "to-do-list-4808a",
  storageBucket: "to-do-list-4808a.appspot.com",
  messagingSenderId: "65503783502",
  appId: "1:65503783502:web:4b592564f2770c6feb711f"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;