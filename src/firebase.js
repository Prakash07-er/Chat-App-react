import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAamAgGeVBGOORi4Oo7Qbcd7AHHsxN2FyY",
  authDomain: "chatapp-e76b1.firebaseapp.com",
  databaseURL: "https://chatapp-e76b1-default-rtdb.firebaseio.com",
  projectId: "chatapp-e76b1",
  storageBucket: "chatapp-e76b1.appspot.com",
  messagingSenderId: "245305934642",
  appId: "1:245305934642:web:9a75b441ecaafd9543cd2b",
  measurementId: "G-GE6MQM8YTL"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export {auth,provider};
  export default db;
