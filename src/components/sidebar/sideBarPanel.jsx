import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'
import style from './sidebar.style'

const SideBarPanel = ({ label, children }) => (
  <div className={css(style.panel)}>
    <div className={css(style.header)}>{label}</div>
    {children}
  </div>
)

SideBarPanel.propTypes = {
  label: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
}

export default SideBarPanel
