// ============================================================
// PASTE YOUR FIREBASE CONFIG BELOW
// Get this from: Firebase Console > Project Settings > Your apps > Web app
// Then replace the placeholder object below with the real one.
// Keep the variable name "firebaseConfig" exactly as is.
// ============================================================

const firebaseConfig = {
  apiKey: "AIzaSyAfkKij1mP0SWVa4NFo8jET_c7WZgYdy9I",
  authDomain: "poojanow-e46f1.firebaseapp.com",
  projectId: "poojanow-e46f1",
  storageBucket: "poojanow-e46f1.firebasestorage.app",
  messagingSenderId: "622094432814",
  appId: "1:622094432814:web:9581d29e2d27f18c7ffdbf"
};

// Do not edit below this line
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();