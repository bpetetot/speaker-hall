import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
}

const getUserProfile = (user) => {
  if (user) {
    return {
      uid: user.uid,
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
    }
  }
  return undefined
}

export const initFirebase = (store) => {
  // initialize firebase app
  const app = firebase.initializeApp(config)

  // initialize firestore
  app.firestore()

  // intialize authentication locale
  firebase.auth().useDeviceLanguage()

  // manage authenticated user status
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in.
      store.dispatch({ type: 'SIGNIN', payload: getUserProfile(user) })
    } else {
      // No user is signed in.
      store.dispatch({ type: 'SIGNOUT' })
    }
  })
}

export default firebase
