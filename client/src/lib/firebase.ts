import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Get Firebase configuration from environment variables
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || ""
};

console.log("Initializing Firebase with config:", {
  apiKey: firebaseConfig.apiKey ? "CONFIGURED" : "MISSING",
  authDomain: firebaseConfig.authDomain ? "CONFIGURED" : "MISSING",
  projectId: firebaseConfig.projectId ? "CONFIGURED" : "MISSING",
});

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
