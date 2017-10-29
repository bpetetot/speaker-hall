import React from 'react'

import Panel from '../../../components/panel'

import './dashboard.css'

const Dashboard = () => (
  <div className="dashboard">
    <h1>Dashboard</h1>
    <div className="dashboard-content">
      <Panel title="Last proposals">Proposals</Panel>
      <Panel title="Current drafts">Current drafts</Panel>
      <Panel title="Coming events">Coming events</Panel>
      <Panel title="Last proposals">Proposals</Panel>
      <Panel title="Current drafts">Current drafts</Panel>
      <Panel title="Coming events">Coming events</Panel>
    </div>
  </div>
)

export default Dashboard
