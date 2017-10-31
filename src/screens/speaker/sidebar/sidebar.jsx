import React from 'react'
import PropTypes from 'prop-types'

import { SideBar, SideBarPanel, SideBarLink } from '../../../components/sidebar'
import IconLabel from '../../../components/iconLabel'

const SpeakerSidebar = ({ className }) => (
  <SideBar className={className}>
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
  </SideBar>
)

SpeakerSidebar.propTypes = {
  className: PropTypes.string,
}

SpeakerSidebar.defaultProps = {
  className: undefined,
}

export default SpeakerSidebar
