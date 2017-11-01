import React from 'react'
import PropTypes from 'prop-types'
import { Fragment } from 'redux-little-router'

import SpeakerSidebar from './sidebar'
import Dashboard from './dashboard'
import Profile from './profile'
import Talks from './talks'

const Speaker = () => [
  /* Sidebar */
  <SpeakerSidebar key="sidebar" className="layout-sidebar" />,
  /* Main content */
  <div key="content" className="layout-main">
    <Fragment forRoute="/profile">
      <Profile />
    </Fragment>
    <Fragment forRoute="/talks">
      <Talks />
    </Fragment>
    <Fragment forRoute="/">
      <Dashboard />
    </Fragment>
  </div>,
]

Speaker.propTypes = {
  className: PropTypes.string,
}

Speaker.defaultProps = {
  className: undefined,
}

export default Speaker
