import React from 'react'
import { Fragment } from 'redux-little-router'

import Login from './login'
import Content from './content'
import './home.css'

const Home = () => (
  <div className="home-screen">
    <div className="home-header">
      <h1>Conference Hall</h1>
    </div>
    <div>
      <Fragment forRoute="/login">
        <Login />
      </Fragment>
      <Fragment forRoute="/">
        <Content />
      </Fragment>
    </div>
  </div>
)

export default Home
