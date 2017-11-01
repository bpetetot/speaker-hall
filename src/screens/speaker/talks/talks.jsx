import React from 'react'

import TalkActions from './talkActions'
import TalkCard from './talkCard'

import './talks.css'

const Talks = () => (
  <div className="talks">
    <TalkActions />
    <div className="talks-table">
      <div className="talks-header">3 talks • 2 drafts • 1 submitted</div>
      <div className="talks-content">
        <TalkCard
          id="1"
          title="react-workbench, le projet, nos erreurs, nos solutions !"
          speakers={['Benjamin Petetot', 'Fabien Juif']}
          badges={['draft']}
          date="2017-02-11T11:30:30"
        />
        <TalkCard
          id="2"
          title="Préparez-vous à prepack ! Prepackez-vous..."
          speakers={['Benjamin Petetot']}
          badges={['draft']}
          date="2017-11-01T11:30:30"
        />
        <TalkCard
          id="3"
          title="Comprendre l'event loop Javascript"
          speakers={['Benjamin Petetot']}
          badges={['validated', 'submitted']}
          date="2014-02-11T11:30:30"
        />
      </div>
    </div>
  </div>
)

export default Talks
