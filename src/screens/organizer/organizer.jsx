import React from 'react'
import { Fragment } from 'redux-little-router'

import protect from '../../components/protect'
import Brand from '../../components/brand'
import Navbar from '../common/navbar'
import Sidebar from './sidebar'
import Events from './events'
import Event from './event'
import Dashboard from './dashboard'

import './organizer.css'

const Organizer = () => (
  <div className="organizer-layout">
    <Brand className="organizer-brand" />
    <Navbar className="organizer-navbar" />
    <Sidebar className="organizer-sidebar" />
    <div className="organizer-main">
      <Fragment forRoute="/events">
        <Events />
      </Fragment>
      <Fragment forRoute="/event/:id">
        <Event />
      </Fragment>
      <Fragment forRoute="/">
        <Dashboard />
      </Fragment>
    </div>
  </div>
)

export default protect(Organizer)
