import React from 'react'

import { LinkButton } from '../../../../components/button'
import IconLabel from '../../../../components/iconLabel'
import Input from '../../../../components/input'

import './eventActions.css'

const EventActions = () => (
  <div className="event-actions">
    <Input type="search" name="search" placeholder="Search events" />
    <LinkButton href="/organizer/event/new">
      <IconLabel icon="fa fa-calendar-plus-o" label="Create event" />
    </LinkButton>
  </div>
)

export default EventActions
