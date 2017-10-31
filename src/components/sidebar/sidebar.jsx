import React from 'react'
import { css } from 'glamor'

import IconLabel from '../iconLabel'
import SideBarPanel from './sideBarPanel'
import SideBarLink from './sideBarLink'

import style from './sidebar.style'

const SideBar = () => (
  <div className={css(style.sidebar)}>
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

export default SideBar
