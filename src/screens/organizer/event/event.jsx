import React from 'react'
import { Fragment } from 'redux-little-router'

import EventTabs from './eventTabs'
import EventInfo from './eventInfo'
import CFPSettings from './cfpSettings'
import Members from './members'

const Event = () => (
  <div>
    <EventTabs id="1" />
    <Fragment forRoute="/">
      <EventInfo />
    </Fragment>
    <Fragment forRoute="/cfp">
      <CFPSettings />
    </Fragment>
    <Fragment forRoute="/members">
      <Members />
    </Fragment>
  </div>
)

export default Event
