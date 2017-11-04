import { connect } from 'react-redux'

import { signout } from '../../redux/auth'
import Speaker from './speaker'

const mapDispatch = dispatch => ({
  signout: () => dispatch(signout()),
})

export default connect(undefined, mapDispatch)(Speaker)
