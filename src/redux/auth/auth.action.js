export const signin = () => async (dispatch, getState, firebase) => {
  const provider = new firebase.auth.GoogleAuthProvider()
  try {
    await firebase.auth().signInWithPopup(provider)
  } catch (error) {
    // https://firebase.google.com/docs/reference/js/firebase.auth.Auth#signInWithPopup
    console.error(error)
  }
}

export const signout = () => async (dispatch, getState, firebase) => {
  try {
    await firebase.auth().signOut()
  } catch (error) {
    console.error(error)
  }
}
