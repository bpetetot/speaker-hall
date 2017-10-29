import React from 'react'
import { Fragment } from 'redux-little-router'

import Dashboard from './dashboard'
import Profile from './profile'

const Speaker = () => (
  <div>
    <Fragment forRoute="/dashboard">
      <Dashboard />
    </Fragment>
    <Fragment forRoute="/profile">
      <Profile />
    </Fragment>
  </div>
)

export default Speaker
