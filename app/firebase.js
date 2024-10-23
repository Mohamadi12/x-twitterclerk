// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "twitterclerk.firebaseapp.com",
  projectId: "twitterclerk",
  storageBucket: "twitterclerk.appspot.com",
  messagingSenderId: "327933373958",
  appId: "1:327933373958:web:31f239f9d8fd5efa541d87"
};


// service firebase.storage {
//   match /b/{bucket}/o {
//     match /{allPaths=**} {
//         allow read;
//         allow write: if
//         request.resource.size < 10 * 1024 * 1024 &&
//         request.resource.contentType.matches('image/.*')
//     }
//   }
// }


// Initialize Firebase
export const app = initializeApp(firebaseConfig);