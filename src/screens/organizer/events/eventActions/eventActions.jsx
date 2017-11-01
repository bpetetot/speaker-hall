import React from 'react'

import Input from '../../../../components/input'
import Button from '../../../../components/button'

import './eventActions.css'

const EventActions = () => (
  <div className="event-actions">
    <Input type="search" name="search" placeholder="Search events" />
    <Button>New event</Button>
  </div>
)

export default EventActions
