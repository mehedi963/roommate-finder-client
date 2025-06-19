import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPICxOgCIwU40faAEfc4OhRxNks0SV-c4",
  authDomain: "roommate-finder-c9163.firebaseapp.com",
  projectId: "roommate-finder-c9163",
  storageBucket: "roommate-finder-c9163.firebasestorage.app",
  messagingSenderId: "303733976354",
  appId: "1:303733976354:web:baf2ea4f62c1949e1ac97b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;