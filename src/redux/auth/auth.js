const initialState = {
  initialized: false,
  authenticated: false,
  user: undefined,
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SIGNIN':
      return { initialized: true, authenticated: true, user: action.payload }
    case 'SIGNOUT':
      return { initialized: true, authenticated: false, user: undefined }
    default:
      return state
  }
}
