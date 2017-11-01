import React from 'react'
import PropTypes from 'prop-types'
import parse from 'date-fns/parse'
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now'
import { Link } from 'redux-little-router'

import Badge from '../../../../components/badge'

import './talkCard.css'

const TalkCard = ({
  id, title, date, badges, speakers,
}) => {
  const relativeDate = distanceInWordsToNow(parse(date), { addSuffix: true })
  return (
    <div className="talk-card">
      <div className="talk-header">
        <Link href={`/speaker/talks/${id}`}>{title}</Link>
        <div className="talk-badges">{badges.map(badge => <Badge key={badge}>{badge}</Badge>)}</div>
      </div>
      <small>
        created {relativeDate} • with {speakers.join(', ')}
      </small>
    </div>
  )
}

TalkCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  badges: PropTypes.arrayOf(PropTypes.string),
  speakers: PropTypes.arrayOf(PropTypes.string),
}

TalkCard.defaultProps = {
  badges: [],
  speakers: [],
}

export default TalkCard
