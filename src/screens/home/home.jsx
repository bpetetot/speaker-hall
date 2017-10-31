import React from 'react'
import { Link } from 'redux-little-router'

import './home.css'

const Home = () => (
  <div className="home-screen">
    <h1>Speaker Hall</h1>
    <div>
      <Link href="/speaker" className="home-link">
        I&apos;m a speaker
      </Link>
      <Link href="/organizer" className="home-link">
        I&apos;m an organizer
      </Link>
    </div>
  </div>
)

export default Home
