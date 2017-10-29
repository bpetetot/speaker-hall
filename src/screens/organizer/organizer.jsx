import React from 'react'
import { Fragment } from 'redux-little-router'

import Dashboard from './dashboard'

const Organizer = () => (
  <div>
    <Fragment forRoute="/">
      <Dashboard />
    </Fragment>
  </div>
)

export default Organizer
