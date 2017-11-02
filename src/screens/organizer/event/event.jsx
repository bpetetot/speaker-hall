import React from 'react'

import { InputLabel, TextareaLabel } from '../../../components/form'

import './event.css'

const Event = () => (
  <div className="event-form">
    <InputLabel name="name" label="Name" type="text" value="Devfest Nantes 2017" />
    <TextareaLabel name="description" label="Description" />
    <InputLabel name="address" label="Address" type="text" value="Cité des congrès de Nantes" />
    <InputLabel name="country" label="Country" type="text" value="France" />
    <InputLabel name="city" label="City" type="text" value="Nantes" />
    <InputLabel name="website" label="Website" type="text" value="https://devfest.gdgnantes.com" />
    <InputLabel name="tags" label="Tags" type="text" value="Android, Web, Cloud" />
  </div>
)

export default Event
