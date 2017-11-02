import { connect } from 'react-redux'

import Event from './event'

const mapState = state => ({
  id: state.router.params.id,
})

export default connect(mapState)(Event)
