import React from 'react'
import { Fragment } from 'redux-little-router'

import protect from '../../components/protect'
import Avatar from '../../components/avatar'
import Brand from '../../components/brand'
import Navbar from '../../components/navbar'
import Sidebar from './sidebar'
import Dashboard from './dashboard'
import Profile from './profile'
import Talks from './talks'

import './speaker.css'

const Speaker = ({ signout }) => (
  <div className="speaker-layout">
    <Brand className="speaker-brand" />
    <Navbar className="speaker-navbar">
      <button onClick={signout}>disconnect</button>
      <Avatar fullname="B" />
    </Navbar>
    <Sidebar className="speaker-sidebar" />
    <div className="speaker-main">
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
