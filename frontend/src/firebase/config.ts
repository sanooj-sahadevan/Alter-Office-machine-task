import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import 'firebase/storage'


// const firebaseConfig = {
//     apiKey: import.meta.env.VITE_APIKEY,
//     authDomain: import.meta.env.VITE_AUTHDOMAIN,
//     projectId: import.meta.env.VITE_PROJECTID,
//     storageBucket: 'job-club-5f5bb.appspot.com',
//     messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
//     appId:import.meta.env.VITE_APPID,
//     measurementId:import.meta.env.VITE_MEASUREMENTID
//   };

// const firebaseConfig = {
//   apiKey: "AIzaSyAyxhXhtA1IuW-410Lyc3D0tW5fbjw-6F0",
//   authDomain: "event-management-9b86d.firebaseapp.com",
//   projectId: "event-management-9b86d",
//   storageBucket: "event-management-9b86d.appspot.com",
//   messagingSenderId: "583260155328",
//   appId: "1:583260155328:web:f016abcbef3aa09a5eec25",
//   measurementId: "G-MM9Y0ZN7LT"
// };


// <script type="module">
//   // Import the functions you need from the SDKs you need
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
//   import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js";
//   // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};



export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth

