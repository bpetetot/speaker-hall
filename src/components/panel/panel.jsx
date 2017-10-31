import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'

import style from './panel.style'

const Panel = ({ title, children }) => (
  <div>
    <div className={css(style.title)}>{title}</div>
    <div className={css(style.content)}>{children}</div>
  </div>
)

Panel.propTypes = {
  title: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
}

export default Panel
