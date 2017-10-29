import React from 'react'
import { Fragment } from 'redux-little-router'

import Dashboard from './dashboard'

const Speaker = () => (
  <div>
    <Fragment forRoute="/">
      <Dashboard />
    </Fragment>
  </div>
)

export default Speaker
