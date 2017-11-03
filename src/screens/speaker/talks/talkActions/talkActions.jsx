import React from 'react'
import { Link } from 'redux-little-router'

import IconLabel from '../../../../components/iconLabel'
import { Input } from '../../../../components/form'

import './talkActions.css'

const TalkActions = () => (
  <div className="talk-actions">
    <Input type="search" name="search" placeholder="Search talks" />
    <Link href="/app/speaker/talk/new" className="btn btn-link">
      <IconLabel icon="fa fa-microphone" label="Create talk" />
    </Link>
  </div>
)

export default TalkActions
