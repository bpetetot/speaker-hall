import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import './sidebar.css'

const SideBar = ({ className }) => (
  <div className={cn('sidebar', className)}>
    <div className="sidebar-menu">
      <div className="sidebar-header">About you</div>
      <div className="sidebar-link">Profile</div>
      <div className="sidebar-link">Talks</div>
    </div>
    <div className="sidebar-menu">
      <div className="sidebar-header">Events</div>
      <div className="sidebar-link">Coming events</div>
      <div className="sidebar-link">Past events</div>
    </div>
  </div>
)

SideBar.propTypes = {
  className: PropTypes.string,
}

SideBar.defaultProps = {
  className: undefined,
}

export default SideBar
