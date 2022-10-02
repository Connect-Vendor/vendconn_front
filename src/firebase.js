// Import the functions you need from the SDKs you need
// console.log('Auth', process.env.VUE_APP_FIREBASE_API_KEY, process.env.VUE_APP_FIREBASE_APP_ID,)

import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: "vendconn.firebaseapp.com",
  projectId: "vendconn",
  storageBucket: "vendconn.appspot.com",
  messagingSenderId: "227876587147",
  appId: process.env.VUE_APP_FIREBASE_APP_ID,
  measurementId: "G-YMX8XH5Y5W"
};

//https://vendconn.firebaseapp.com/__/auth/handler

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default  app;