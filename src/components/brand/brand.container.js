import { connect } from 'react-redux'

import Brand from './brand'

const mapState = state => ({
  title: state.router.result.title,
})

export default connect(mapState)(Brand)
