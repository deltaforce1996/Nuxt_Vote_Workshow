import firebase from 'firebase'
const GoogleAuth = () => {
  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({
    login_hint: 'user@psu.ac.th',
  })
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      //   /** @type {firebase.auth.OAuthCredential} */
      //   const credential = result.credential
      //   // This gives you a Google Access Token. You can use it to access the Google API.
      //   const token = credential.accessToken
      //   // The signed-in user info.
      //   const user = result.user
      // ...
    })
    .catch((error) => {
      //   // Handle Errors here.
      //   const errorCode = error.code
      //   const errorMessage = error.message
      //   // The email of the user's account used.
      //   const email = error.email
      //   // The firebase.auth.AuthCredential type that was used.
      //   const credential = error.credential
      window.console.log(error.message)
    })
}

export default GoogleAuth
