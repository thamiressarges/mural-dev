import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAM2MNMYf02NO4SZKGLHv-sRdG0DrStOL8",
  authDomain: "dev-mural.firebaseapp.com",
  projectId: "dev-mural",
  storageBucket: "dev-mural.firebasestorage.app",
  messagingSenderId: "293207692368",
  appId: "1:293207692368:web:9c7f3d736d71cf6b7a6d55"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export {auth, db}