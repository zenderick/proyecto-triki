import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkxIoshr0NyywCiHJqTo3MiM5PNVaMPUk",
  authDomain: "triki-ab2d8.firebaseapp.com",
  projectId: "triki-ab2d8",
  storageBucket: "triki-ab2d8.appspot.com",
  messagingSenderId: "92348103706",
  appId: "1:92348103706:web:9f1fc0463bd38fde56a5a3"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();


export {db}
