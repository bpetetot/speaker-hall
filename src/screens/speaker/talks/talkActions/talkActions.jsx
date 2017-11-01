import React from 'react'

import { LinkButton } from '../../../../components/button'
import IconLabel from '../../../../components/iconLabel'
import Input from '../../../../components/input'

import './talkActions.css'

const TalkActions = () => (
  <div className="talk-actions">
    <Input type="search" name="search" placeholder="Search talks" />
    <LinkButton href="/speaker/talk/new">
      <IconLabel icon="fa fa-microphone" label="Create talk" />
    </LinkButton>
  </div>
)

export default TalkActions
