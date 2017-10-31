import { connect } from 'react-redux'
import classnames from 'classnames'

import './global.css'
import './themes/default.css'
import './themes/blue.css'
import './themes/red.css'

export default (Component) => {
  const mapState = (state) => {
    const { type } = state.router.result
    return {
      theme: classnames('default-theme', {
        'blue-theme': type === 'speaker',
        'red-theme': type === 'organizer',
      }),
    }
  }
  return connect(mapState)(Component)
}
