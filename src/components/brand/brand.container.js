import { connect } from 'react-redux'
import startsWith from 'lodash/startsWith'

import Brand from './brand'

const mapState = (state) => {
  const { pathname } = state.router
  if (startsWith(pathname, '/app/speaker')) {
    return { title: 'Speaker' }
  } else if (startsWith(pathname, '/app/organizer')) {
    return { title: 'Organizer' }
  }
  return { title: 'Conference Hall' }
}

export default connect(mapState)(Brand)
