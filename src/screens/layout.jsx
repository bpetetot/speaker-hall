import React from 'react'
import { Fragment } from 'redux-little-router'

import Brand from '../components/brand'
import Navbar from '../components/navbar'
import Speaker from './speaker'
import Organizer from './organizer'

import './layout.css'

const Layout = () => (
  <div className="layout-screen">
    <Brand className="layout-brand" />
    <Navbar className="layout-navbar" />
    <Fragment forRoute="/speaker">
      <Speaker />
    </Fragment>
    <Fragment forRoute="/organizer">
      <Organizer />
    </Fragment>
  </div>
)

export default Layout
