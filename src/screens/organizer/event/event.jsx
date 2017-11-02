import React from 'react'
import PropTypes from 'prop-types'
import { Fragment } from 'redux-little-router'

import EventTabs from './eventTabs'
import EventInfo from './eventInfo'
import CFPSettings from './cfpSettings'
import Members from './members'

const Event = ({ id }) => (
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
)

Event.propTypes = {
  id: PropTypes.string.isRequired,
}

export default Event
