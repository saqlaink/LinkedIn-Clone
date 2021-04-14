import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAIEK0jqDPOL9EOrzhobPDbeHIjXrjaiZI",
  authDomain: "clone-3a042.firebaseapp.com",
  projectId: "clone-3a042",
  storageBucket: "clone-3a042.appspot.com",
  messagingSenderId: "643027161923",
  appId: "1:643027161923:web:8ae9ab444bd26aad7b55f6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
