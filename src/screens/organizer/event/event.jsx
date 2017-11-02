import React from 'react'
import PropTypes from 'prop-types'
import { Fragment } from 'redux-little-router'

import Dashboard from './dashboard'
import CFP from './cfp'
import EventTabs from './eventTabs'
import EventInfo from './eventInfo'
import CFPSettings from './cfpSettings'
import Members from './members'

const Event = ({ id }) => (
  <div>
    <Fragment forRoute="/dashboard">
      <Dashboard />
    </Fragment>
    <Fragment forRoute="/edit">
      <div>
        <EventTabs id={id} />
        <Fragment forRoute="/cfp">
          <CFPSettings />
        </Fragment>
        <Fragment forRoute="/members">
          <Members />
        </Fragment>
        <Fragment forRoute="/">
          <EventInfo />
        </Fragment>
      </div>
    </Fragment>
    <Fragment forRoute="/cfp">
      <CFP />
    </Fragment>
  </div>
)

Event.propTypes = {
  id: PropTypes.string.isRequired,
}

export default Event
