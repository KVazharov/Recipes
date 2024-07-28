
import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBcCdqyOHdwlEl6WhKy1mcx86sgfK8q5qY",
  authDomain: "recipes-b4913.firebaseapp.com",
  projectId: "recipes-b4913",
  storageBucket: "recipes-b4913.appspot.com",
  messagingSenderId: "1011557349298",
  appId: "1:1011557349298:web:145855f62c6259546256ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)