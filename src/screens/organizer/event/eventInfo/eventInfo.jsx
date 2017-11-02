import React from 'react'
import { InputLabel, TextareaLabel, RadioGroupLabel, RadioBox } from '../../../../components/form'

import './eventInfo.css'

const EventInfo = () => (
  <div className="event-info">
    <RadioGroupLabel name="type" label="Type" inline>
      <RadioBox name="type" value="conference" checked>
        Conference
      </RadioBox>
      <RadioBox name="type" value="meetup">
        Meetup
      </RadioBox>
    </RadioGroupLabel>
    <InputLabel name="name" label="Name" type="text" value="Devfest Nantes 2017" />
    <TextareaLabel name="description" label="Description" />
    <InputLabel
      name="address"
      label="Venue address"
      type="text"
      value="Cité des congrès de Nantes"
    />
    <InputLabel name="country" label="Country" type="text" value="France" />
    <InputLabel name="city" label="City" type="text" value="Nantes" />
    <InputLabel name="website" label="Website" type="text" value="https://devfest.gdgnantes.com" />
    <InputLabel name="tags" label="Tags" type="text" value="Android, Web, Cloud" />
    <button className="event-button btn btn-primary">Save event</button>
  </div>
)

export default EventInfo
