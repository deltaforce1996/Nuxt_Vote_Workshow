import firebase from 'firebase'
const GoogleAuthSingIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider()
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      const credential = result.credential
      const token = credential.accessToken
      window.console.log(token)
      const user = result.user
      window.console.log(user.emailVerified)
      window.console.log(user.displayName)
    })
    .catch((error) => {
      //   // Handle Errors here.
      const errorCode = error.code
      const errorMessage = error.message
      //   // The email of the user's account used.
      const email = error.email
      //   // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential
      window.console.log(email)
      window.console.log(errorCode)
      window.console.log(errorMessage)
      window.console.log(credential)
    })
}

const SignOut = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      window.console.log('SignOut')
    })
    .catch((error) => {
      window.console.log(error.message)
    })
}

export default { GoogleAuthSingIn, SignOut }
