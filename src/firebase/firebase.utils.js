import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyCZGPLQjeKjKlFKdNQwNdVDdj3YDi8Fr18",
  authDomain: "cupangku26.firebaseapp.com",
  databaseURL: "https://cupangku26.firebaseio.com",
  projectId: "cupangku26",
  storageBucket: "cupangku26.appspot.com",
  messagingSenderId: "146391537974",
  appId: "1:146391537974:web:356c5bf01ce7df331cbb97"
};

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase