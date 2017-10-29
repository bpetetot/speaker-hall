import { connect } from 'react-redux'

import Brand from './brand'

const mapState = state => ({
  title: state.router.result.title,
  type: state.router.result.type,
})

export default connect(mapState)(Brand)
