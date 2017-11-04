import { connect } from 'react-redux'
import startsWith from 'lodash/startsWith'

import Brand from './brand'

const mapState = (state) => {
  const { pathname } = state.router
  if (startsWith(pathname, '/speaker')) {
    return { title: 'Speaker Hall' }
  } else if (startsWith(pathname, '/organizer')) {
    return { title: 'Organizer Hall' }
  }
  return { title: 'Conference Hall' }
}

export default connect(mapState)(Brand)
