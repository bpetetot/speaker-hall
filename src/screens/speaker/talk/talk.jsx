import React from 'react'

import { InputLabel, TextareaLabel, RadioGroupLabel, RadioBox } from '../../../components/form'

import './talk.css'

const Talk = () => (
  <div className="talk-form">
    <InputLabel name="speakers" label="Speakers" type="text" value="Benjamin Petetot" />
    <InputLabel
      name="title"
      label="Title"
      type="text"
      value="react-workbench, le projet, nos erreurs, nos solutions !"
    />
    <TextareaLabel name="abstract" label="Abstract" />
    <InputLabel name="tags" label="Tags" type="text" value="React, Tooling" />
    <RadioGroupLabel name="level" label="Level" inline>
      <RadioBox name="level" value="0" checked>
        Beginner
      </RadioBox>
      <RadioBox name="level" value="1">
        Intermediate
      </RadioBox>
      <RadioBox name="level" value="2">
        Advanced
      </RadioBox>
    </RadioGroupLabel>
    <TextareaLabel name="references" label="References" />
    <button className="talk-button btn btn-primary">Save talk</button>
    <a href="/" className="talk-button btn btn-link">
      Submit to event
    </a>
  </div>
)

export default Talk
