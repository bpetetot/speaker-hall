import React from 'react'
import { Fragment } from 'redux-little-router'
import { css } from 'glamor'

import Brand from '../components/brand'
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'
import Speaker from './speaker'
import Organizer from './organizer'

import style from './layout.style'

const Layout = () => (
  <div className={css(style.layout)}>
    <Brand className={css(style.brand)} />
    <Navbar className={css(style.navbar)} />
    <Sidebar className={css(style.sidebar)} />
    <div className={css(style.main)}>
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
