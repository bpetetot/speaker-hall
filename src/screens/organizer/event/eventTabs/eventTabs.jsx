import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'redux-little-router'

import IconLabel from '../../../../components/iconLabel'

const EventTabs = ({ id }) => (
  <ul className="tabs">
    <li>
      <Link href={`/app/organizer/event/${id}/edit`} activeProps={{ className: 'tab-active' }}>
        <IconLabel icon="fa fa-calendar-o" label="Event information" />
      </Link>
    </li>
    <li>
      <Link href={`/app/organizer/event/${id}/edit/cfp`} activeProps={{ className: 'tab-active' }}>
        <IconLabel icon="fa fa-gear" label="CFP Settings" />
      </Link>
    </li>
    <li>
      <Link
        href={`/app/organizer/event/${id}/edit/members`}
        activeProps={{ className: 'tab-active' }}
      >
        <IconLabel icon="fa fa-users" label="Members" />
      </Link>
    </li>
  </ul>
)

EventTabs.propTypes = {
  id: PropTypes.string.isRequired,
}

export default EventTabs
