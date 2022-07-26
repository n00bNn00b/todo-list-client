// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQOaEHf6VAKICW8147M6xVnmJkI-bq2eM",
  authDomain: "sigma-todo.firebaseapp.com",
  projectId: "sigma-todo",
  storageBucket: "sigma-todo.appspot.com",
  messagingSenderId: "357878380785",
  appId: "1:357878380785:web:0c8906dd0ea34062aa1150",
  measurementId: "G-FNDFHENSP4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
