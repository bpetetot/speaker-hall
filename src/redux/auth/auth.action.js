import firebase from '../../firebase'

export const signin = () => async () => {
  const provider = new firebase.auth.GoogleAuthProvider()
  try {
    await firebase.auth().signInWithPopup(provider)
  } catch (error) {
    // https://firebase.google.com/docs/reference/js/firebase.auth.Auth#signInWithPopup
    console.error(error)
  }
}

export const signout = () => async () => {
  try {
    await firebase.auth().signOut()
  } catch (error) {
    console.error(error)
  }
}
