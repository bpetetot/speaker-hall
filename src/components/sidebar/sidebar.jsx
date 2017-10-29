import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import IconLabel from '../iconLabel'

import './sidebar.css'

const SideBar = ({ className }) => (
  <div className={cn('sidebar', className)}>
    <div className="sidebar-menu">
      <div className="sidebar-header">General</div>
      <IconLabel icon="fa fa-pie-chart" label="Dashboard" className="sidebar-link" />
      <IconLabel icon="fa fa-user-circle" label="Profile" className="sidebar-link" />
      <IconLabel icon="fa fa-microphone" label="Talks" className="sidebar-link" />
    </div>
    <div className="sidebar-menu">
      <div className="sidebar-header">Events</div>
      <IconLabel icon="fa fa-rocket" label="Coming events" className="sidebar-link" />
      <IconLabel icon="fa fa-history" label="Past events" className="sidebar-link" />
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
