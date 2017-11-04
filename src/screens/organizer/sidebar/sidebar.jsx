import React from 'react'
import PropTypes from 'prop-types'
import { Fragment } from 'redux-little-router'

import { SideBar, SideBarPanel, SideBarLink } from '../../../components/sidebar'
import IconLabel from '../../../components/iconLabel'

const OrganizerSideBar = ({ className }) => (
  <SideBar className={className}>
    <SideBarPanel label="General">
      <SideBarLink to="/organizer">
        <IconLabel icon="fa fa-pie-chart" label="Dashboard" />
      </SideBarLink>
      <SideBarLink to="/organizer/events">
        <IconLabel icon="fa fa-calendar-o" label="Events" />
      </SideBarLink>
    </SideBarPanel>
    <Fragment forRoute="/event/:id">
      <SideBarPanel label="Devfest Nantes 2017">
        <SideBarLink to="/organizer/event/id/dashboard">
          <IconLabel icon="fa fa-pie-chart" label="Dashboard" />
        </SideBarLink>
        <SideBarLink to="/organizer/event/id/edit">
          <IconLabel icon="fa fa-gear" label="Configuration" />
        </SideBarLink>
        <SideBarLink to="/organizer/event/id/cfp">
          <IconLabel icon="fa fa-microphone" label="Call for paper" />
        </SideBarLink>
      </SideBarPanel>
    </Fragment>
  </SideBar>
)

OrganizerSideBar.propTypes = {
  className: PropTypes.string,
}

OrganizerSideBar.defaultProps = {
  className: undefined,
}

export default OrganizerSideBar
