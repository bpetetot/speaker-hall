import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
}

export const initFirebase = () => {
  /** intialize firebase app */
  const app = firebase.initializeApp(config)

  /** intialize firestore */
  app.firestore()
}

/** firebase api */
export default firebase
