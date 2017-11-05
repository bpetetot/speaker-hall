import React from 'react'
import { Fragment } from 'redux-little-router'

import protect from '../../components/protect'
import Brand from '../common/brand'
import Navbar from '../common/navbar'
import Sidebar from './sidebar'
import Events from './events'
import Event from './event'
import Dashboard from './dashboard'

import '../common/layout.css'

const Organizer = () => (
  <div className="layout-screen">
    <Brand className="layout-brand" />
    <Navbar className="layout-navbar" />
    <Sidebar className="layout-sidebar" />
    <div className="layout-main">
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
