import React from 'react'
import PropTypes from 'prop-types'
import parse from 'date-fns/parse'
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now'
import { Link } from 'redux-little-router'

import Badge from '../../../../components/badge'

import './eventCard.css'

const EventCard = ({
  id, title, date, badges,
}) => {
  const relativeDate = distanceInWordsToNow(parse(date), { addSuffix: true })
  return (
    <div className="event-card">
      <div className="event-header">
        <Link href={`/organizer/event/${id}`}>{title}</Link>
        <div className="event-badges">
          {badges.map(badge => <Badge key={badge}>{badge}</Badge>)}
        </div>
      </div>
      <small>created {relativeDate}</small>
    </div>
  )
}

EventCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  badges: PropTypes.arrayOf(PropTypes.string),
}

EventCard.defaultProps = {
  badges: [],
}

export default EventCard
