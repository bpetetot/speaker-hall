import React from 'react'

import Input from '../../../components/form/input'
import Textarea from '../../../components/form/textarea'

import './event.css'

const Event = () => (
  <div className="event-form">
    <Input name="name" label="Name" type="text" value="Devfest Nantes 2017" />
    <Textarea name="description" label="Description" />
    <Input name="address" label="Address" type="text" value="Cité des congrès de Nantes" />
    <Input name="country" label="Country" type="text" value="France" />
    <Input name="city" label="City" type="text" value="Nantes" />
    <Input name="website" label="Website" type="text" value="https://devfest.gdgnantes.com" />
    <Input name="tags" label="Tags" type="text" value="Android, Web, Cloud" />
  </div>
)

export default Event
