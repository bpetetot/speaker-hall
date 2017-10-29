import React from 'react'
import { Fragment } from 'redux-little-router'

import Brand from '../components/brand'
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'
import Speaker from './speaker'
import Organizer from './organizer'

import './layout.css'

const Layout = () => (
  <div className="layout-screen">
    <Brand className="layout-brand" />
    <Navbar className="layout-navbar" />
    <Sidebar className="layout-sidebar" />
    <div className="layout-main">
      <Fragment forRoute="/speaker">
        <Speaker />
      </Fragment>
      <Fragment forRoute="/organizer">
        <Organizer />
      </Fragment>
    </div>
  </div>
)

export default Layout
