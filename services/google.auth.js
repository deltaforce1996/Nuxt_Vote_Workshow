import firebase from 'firebase'
import { Voites } from '../models/voites'
const GoogleAuthSingIn = async () => {
  const provider = new firebase.auth.GoogleAuthProvider()
  const result = await firebase.auth().signInWithPopup(provider)
  const credential = result.credential
  const token = credential.accessToken
  window.console.log(token)
  const user = result.user
  if (user.emailVerified) {
    return {
      token: credential.accessToken,
      success: user.emailVerified,
      user: new Voites(await GetUidSingIn(), user.displayName),
    }
  }
}

const SignOut = async () => {
  try {
    await firebase.auth().signOut()
    return { success: true }
  } catch (error) {
    return { success: false }
  }
}

const GetUidSingIn = async () => {
  const user = await firebase.auth().currentUser
  if (user) {
    const uid = user.uid
    return uid
  } else {
    return null
  }
}

export default { GoogleAuthSingIn, SignOut, GetUidSingIn }
