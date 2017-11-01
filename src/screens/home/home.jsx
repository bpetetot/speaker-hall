import React from 'react'
import { Link } from 'redux-little-router'

import './home.css'

const Home = () => (
  <div className="home-screen">
    <div className="home-header">
      <h1>Conference Hall</h1>
    </div>
    <div className="home-content">
      <Link href="/speaker" className="home-link">
        <i className="fa fa-microphone" />
        <span>I&apos;m a speaker</span>
      </Link>
      <Link href="/organizer" className="home-link">
        <i className="fa fa-rocket" />
        <span>I&apos;m an organizer</span>
      </Link>
    </div>
  </div>
)

export default Home
