import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCcXRwnvWSqc9tlUXZKUYaw44B3HhM9VH4",
  authDomain: "ktpclauncher.firebaseapp.com",
  projectId: "ktpclauncher",
  storageBucket: "ktpclauncher.firebasestorage.app",
  messagingSenderId: "406353305836",
  appId: "1:406353305836:web:12e811e9eb39b30ce085c9",
  measurementId: "G-N13RRHHDKF"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
