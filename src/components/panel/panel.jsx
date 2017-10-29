import React from 'react'
import PropTypes from 'prop-types'

import './panel.css'

const Panel = ({ title, children }) => (
  <div className="panel">
    <div className="panel-title">{title}</div>
    <div className="panel-content">{children}</div>
  </div>
)

Panel.propTypes = {
  title: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
}

export default Panel
