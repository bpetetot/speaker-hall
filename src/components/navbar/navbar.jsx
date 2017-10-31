import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'
import style from './navbar.style'

const Navbar = ({ children }) => (
  <nav className={css(style.navbar)}>
    <div className={css(style.actions)}>{children}</div>
  </nav>
)

Navbar.propTypes = {
  children: PropTypes.node,
}

Navbar.defaultProps = {
  children: undefined,
}

export default Navbar
