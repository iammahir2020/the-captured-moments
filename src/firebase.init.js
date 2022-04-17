// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDot5B-f39IhwmzQs_8Wg-XhedgvY_IicU",
  authDomain: "the-captured-moments.firebaseapp.com",
  projectId: "the-captured-moments",
  storageBucket: "the-captured-moments.appspot.com",
  messagingSenderId: "706761383986",
  appId: "1:706761383986:web:ae4f7657fce4e200e99c2b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
