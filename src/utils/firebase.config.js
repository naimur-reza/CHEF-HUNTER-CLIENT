// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnCvkcJlwXKrvVaSU9G6BoxzKOOnFCDYI",
  authDomain: "chef-master-pro.firebaseapp.com",
  projectId: "chef-master-pro",
  storageBucket: "chef-master-pro.appspot.com",
  messagingSenderId: "711965413473",
  appId: "1:711965413473:web:92297694bf29a8c2365a20",
  measurementId: "G-S0X7ZX4P82",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
