import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'redux-little-router'
import { css } from 'glamor'
import style from './sidebar.style'

const SideBarLink = ({ children, to }) => (
  <Link href={to} className={css(style.link)} activeProps={{ style: { color: '#0d64ad' } }}>
    {children}
  </Link>
)

SideBarLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
}

export default SideBarLink
