import { connect } from 'react-redux'
import { push } from 'redux-little-router'

import { isAuthenticated, isInitialized } from '../../redux/auth'
import PrivateFragment from './privateFragment'

const mapState = state => ({
  isInitialized: isInitialized(state),
  isAuthenticated: isAuthenticated(state),
  nextUrl: state.router.pathname,
})

const mapDispatch = dispatch => ({
  redirectLogin: (/** nextUrl */) => dispatch(push('/login')),
})

export default connect(mapState, mapDispatch)(PrivateFragment)
