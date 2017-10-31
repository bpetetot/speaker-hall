import React from 'react'
import { css } from 'glamor'

import Panel from '../../../components/panel'

import style from './dashboard.style'

const Dashboard = () => (
  <div className={css(style)}>
    <Panel title="Last proposals">Proposals</Panel>
    <Panel title="Current drafts">Current drafts</Panel>
    <Panel title="Coming events">Coming events</Panel>
    <Panel title="Last proposals">Proposals</Panel>
    <Panel title="Current drafts">Current drafts</Panel>
    <Panel title="Coming events">Coming events</Panel>
  </div>
)

export default Dashboard
