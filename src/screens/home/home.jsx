import React from 'react'
import { Link } from 'redux-little-router'
import { css } from 'glamor'
import style from './home.style'

const Home = () => (
  <div className={css(style.home)}>
    <h1>Speaker Hall</h1>
    <div>
      <Link href="/app/speaker" className={css(style.link)}>
        I&apos;m a speaker
      </Link>
      <Link href="/app/organizer" className={css(style.link)}>
        I&apos;m an organizer
      </Link>
    </div>
  </div>
)

export default Home
