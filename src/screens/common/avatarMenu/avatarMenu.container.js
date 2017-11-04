import { connect } from 'react-redux'

import { getUser, signout } from '../../../redux/auth'
import AvatarMenu from './avatarMenu'

const mapState = state => ({
  fullname: getUser(state).displayName,
  image: getUser(state).photoURL,
})

const mapDispatch = dispatch => ({
  signout: () => dispatch(signout()),
})

export default connect(mapState, mapDispatch)(AvatarMenu)
