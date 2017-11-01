import React from 'react'

import EventActions from './eventActions'
import EventCard from './eventCard'

import './events.css'

const Events = () => (
  <div className="events">
    <EventActions />
    <div className="events-table">
      <div className="events-header">3 events • 2 opened • 1 finished</div>
      <div className="events-content">
        <EventCard id="1" title="GDG Nantes" badges={['opened']} date="2017-02-11T11:30:30" />
        <EventCard
          id="2"
          title="DevFest Nantes 2017"
          badges={['opened']}
          date="2017-11-01T11:30:30"
        />
        <EventCard
          id="3"
          title="DevFest Nantes 2016"
          badges={['finished']}
          date="2014-02-11T11:30:30"
        />
      </div>
    </div>
  </div>
)

export default Events
