import firebase from 'firebase';
// import firebase from "firebase/app";
// import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_DATABASE_URL,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_IN,
  appId: process.env.REACT_APP_ID,
};

export default firebase.initializeApp(firebaseConfig);
