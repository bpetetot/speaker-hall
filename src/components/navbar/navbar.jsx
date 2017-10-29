import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import './navbar.css'

const Navbar = ({ children, className }) => (
  <nav className={cn('navbar', className)}>
    <div className="navbar-actions">{children}</div>
  </nav>
)

Navbar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

Navbar.defaultProps = {
  children: undefined,
  className: undefined,
}

export default Navbar
