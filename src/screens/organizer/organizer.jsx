import React from 'react'
import PropTypes from 'prop-types'
import { Fragment } from 'redux-little-router'

import OrganizerSidebar from './sidebar'
import Events from './events'
import Event from './event'
import Dashboard from './dashboard'

const Organizer = () => [
  /* Sidebar */
  <OrganizerSidebar key="sidebar" className="layout-sidebar" />,
  /* Main content */
  <div key="content" className="layout-main">
    <Fragment forRoute="/events">
      <Events />
    </Fragment>
    <Fragment forRoute="/event/:id">
      <Event />
    </Fragment>
    <Fragment forRoute="/">
      <Dashboard />
    </Fragment>
  </div>,
]

Organizer.propTypes = {
  className: PropTypes.string,
}

Organizer.defaultProps = {
  className: undefined,
}

export default Organizer
