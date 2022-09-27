// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnOVIvUMp-w3WftxiqvJRXJ0KtMg_rk-M",
  authDomain: "vendconn.firebaseapp.com",
  projectId: "vendconn",
  storageBucket: "vendconn.appspot.com",
  messagingSenderId: "227876587147",
  appId: "1:227876587147:web:f1ee6473686c372c30f68e",
  measurementId: "G-YMX8XH5Y5W"
};

//https://vendconn.firebaseapp.com/__/auth/handler

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default  app;