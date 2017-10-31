import React from 'react'
import PropTypes from 'prop-types'

import { SideBar, SideBarPanel, SideBarLink } from '../../../components/sidebar'
import IconLabel from '../../../components/iconLabel'

const OrganizerSideBar = ({ className }) => (
  <SideBar className={className}>
    <SideBarPanel label="General">
      <SideBarLink to="/organizer">
        <IconLabel icon="fa fa-pie-chart" label="Dashboard" />
      </SideBarLink>
      <SideBarLink to="/organizer/events">
        <IconLabel icon="fa fa-user-circle" label="My events" />
      </SideBarLink>
    </SideBarPanel>
  </SideBar>
)

OrganizerSideBar.propTypes = {
  className: PropTypes.string,
}

OrganizerSideBar.defaultProps = {
  className: undefined,
}

export default OrganizerSideBar
