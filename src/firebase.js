import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCatyfwoDfEdpTRh1LrMIDDCI3_9g3cKJw",
  authDomain: "slack-clone-f2d75.firebaseapp.com",
  databaseURL: "https://slack-clone-f2d75-default-rtdb.firebaseio.com",
  projectId: "slack-clone-f2d75",
  storageBucket: "slack-clone-f2d75.appspot.com",
  messagingSenderId: "737282273267",
  appId: "1:737282273267:web:c8c10c66d1429b35d76c86",
  measurementId: "G-D9PZ2GD8M6"
};

const firebaseAPP = firebase.initializeApp(firebaseConfig)
const db = firebaseAPP.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider};
export default db; 
