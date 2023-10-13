import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCG4ImiYOtpMeg61ZFFrYV-TFIdpuLxicQ",
  authDomain: "miniblig.firebaseapp.com",
  projectId: "miniblig",
  storageBucket: "miniblig.appspot.com",
  messagingSenderId: "471613884469",
  appId: "1:471613884469:web:e7b47c5a1f6a8bf57f097c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const db = getFirestore(app);


export {db};