import { connect } from 'react-redux'
import startsWith from 'lodash/startsWith'
import classnames from 'classnames'

import './global.css'
import './themes/default.css'
import './themes/blue.css'
import './themes/red.css'

export default (Component) => {
  const mapState = (state) => {
    const { pathname } = state.router
    return {
      theme: classnames('default-theme', {
        'blue-theme': startsWith(pathname, '/app/speaker'),
        'red-theme': startsWith(pathname, '/app/organizer'),
      }),
    }
  }
  return connect(mapState)(Component)
}
