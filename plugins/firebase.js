import firebase from 'firebase'
const firebaseConfig = {
  apiKey: 'AIzaSyDO4OIg3S68d6XKRObQcnuFJjRGDrdXv5M',
  authDomain: 'votes-nuxtjs-workshop.firebaseapp.com',
  databaseURL:
    'https://votes-nuxtjs-workshop-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'votes-nuxtjs-workshop',
  storageBucket: 'votes-nuxtjs-workshop.appspot.com',
  messagingSenderId: '260224968669',
  appId: '1:260224968669:web:9595eca1c76a3d7877f834',
  measurementId: 'G-8BKEWBCNRT',
}

firebase.initializeApp(firebaseConfig)

// inject it so it can be accessed as this.$firebase inside the project
export default (ctx, inject) => {
  inject('firebase', firebase)
}
