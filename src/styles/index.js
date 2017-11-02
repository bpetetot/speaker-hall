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
        'blue-theme': startsWith(pathname, '/speaker'),
        'red-theme': startsWith(pathname, '/organizer'),
      }),
    }
  }
  return connect(mapState)(Component)
}
