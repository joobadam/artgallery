
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyD12rJ3nr106P-zktUfcQSO5XgXAAzIXR0",
  authDomain: "artgallery-c0bde.firebaseapp.com",
  projectId: "artgallery-c0bde",
  storageBucket: "artgallery-c0bde.appspot.com",
  messagingSenderId: "66127890436",
  appId: "1:66127890436:web:ccc8fe6481adf3bb994d51"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);