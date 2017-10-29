import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import IconLabel from '../iconLabel'
import SideBarPanel from './sideBarPanel'
import SideBarLink from './sideBarLink'

import './sidebar.css'

const SideBar = ({ className }) => (
  <div className={cn('sidebar', className)}>
    <SideBarPanel label="General">
      <SideBarLink to="/app/speaker/dashboard">
        <IconLabel icon="fa fa-pie-chart" label="Dashboard" />
      </SideBarLink>
      <SideBarLink to="/app/speaker/profile">
        <IconLabel icon="fa fa-user-circle" label="Profile" />
      </SideBarLink>
      <SideBarLink to="/app/speaker/talks">
        <IconLabel icon="fa fa-microphone" label="Talks" />
      </SideBarLink>
    </SideBarPanel>
    <SideBarPanel label="Events">
      <SideBarLink to="/app/speaker/coming">
        <IconLabel icon="fa fa-rocket" label="Coming events" />
      </SideBarLink>
      <SideBarLink to="/app/speaker/last">
        <IconLabel icon="fa fa-history" label="Last events" />
      </SideBarLink>
    </SideBarPanel>
  </div>
)

SideBar.propTypes = {
  className: PropTypes.string,
}

SideBar.defaultProps = {
  className: undefined,
}

export default SideBar
