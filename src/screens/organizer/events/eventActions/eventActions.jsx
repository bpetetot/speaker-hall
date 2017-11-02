import React from 'react'
import { Link } from 'redux-little-router'

import IconLabel from '../../../../components/iconLabel'
import { Input } from '../../../../components/form'

import './eventActions.css'

const EventActions = () => (
  <div className="event-actions">
    <Input type="search" name="search" placeholder="Search events" />
    <Link href="/organizer/event/new/edit" className="btn btn-link">
      <IconLabel icon="fa fa-calendar-plus-o" label="Create event" />
    </Link>
  </div>
)

export default EventActions
