import { connect } from 'react-redux'

import { signin, signout, getUser } from '../../../redux/auth'

import Login from './login'

const mapState = state => ({
  user: getUser(state).displayName,
})

const mapDispatch = dispatch => ({
  signin: provider => dispatch(signin(provider)),
  signout: () => dispatch(signout()),
})

export default connect(mapState, mapDispatch)(Login)
