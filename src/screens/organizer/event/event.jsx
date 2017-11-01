import React from 'react'
import PropTypes from 'prop-types'

const Event = ({ id }) => <div>New event {id}</div>

Event.propTypes = {
  id: PropTypes.string,
}

Event.defaultProps = {
  id: undefined,
}

export default Event
