import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'

import style from './iconLabel.style'

const IconLabel = ({ icon, label }) => (
  <span className={css(style)}>
    <i className={icon} />
    <span>{label}</span>
  </span>
)

IconLabel.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}
export default IconLabel
