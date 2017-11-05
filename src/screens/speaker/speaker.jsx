import React from 'react'
import { Fragment } from 'redux-little-router'

import protect from '../../components/protect'
import Brand from '../common/brand'
import Navbar from '../common/navbar'
import Sidebar from './sidebar'
import Dashboard from './dashboard'
import Profile from './profile'
import Talks from './talks'

import '../common/layout.css'

const Speaker = () => (
  <div className="layout-screen">
    <Brand className="layout-brand" />
    <Navbar className="layout-navbar" />
    <Sidebar className="layout-sidebar" />
    <div className="layout-main">
      <Fragment forRoute="/profile">
        <Profile />
      </Fragment>
      <Fragment forRoute="/talks">
        <Talks />
      </Fragment>
      <Fragment forRoute="/">
        <Dashboard />
      </Fragment>
    </div>
  </div>
)

export default protect(Speaker)
