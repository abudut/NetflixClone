import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyCdNyE5Vqg59-OjB8F3kRCxBQnl6ZX82DI",
    authDomain: "netflix-clone-134de.firebaseapp.com",
    projectId: "netflix-clone-134de",
    storageBucket: "netflix-clone-134de.appspot.com",
    messagingSenderId: "655631732890",
    appId: "1:655631732890:web:723bffc8ee70806bde4f23"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db= firebaseApp.firestore()
  const auth= firebase.auth()

  export {auth}
  export default db