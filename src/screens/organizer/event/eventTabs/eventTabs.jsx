import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'redux-little-router'

import IconLabel from '../../../../components/iconLabel'
import './eventTabs.css'

const EventTabs = ({ id }) => (
  <ul className="tabs">
    <li>
      <Link href={`/organizer/event/${id}`} activeProps={{ className: 'tab-link-active' }}>
        <IconLabel icon="fa fa-calendar-o" label="Event information" />
      </Link>
    </li>
    <li>
      <Link href={`/organizer/event/${id}/cfp`} activeProps={{ className: 'tab-link-active' }}>
        <IconLabel icon="fa fa-gear" label="CFP Settings" />
      </Link>
    </li>
    <li>
      <Link href={`/organizer/event/${id}/members`} activeProps={{ className: 'tab-link-active' }}>
        <IconLabel icon="fa fa-users" label="Members" />
      </Link>
    </li>
  </ul>
)

EventTabs.propTypes = {
  id: PropTypes.string.isRequired,
}

export default EventTabs
