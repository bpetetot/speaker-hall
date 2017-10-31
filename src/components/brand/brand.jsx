import React from 'react'
import PropTypes from 'prop-types'

import style from './brand.style'
import { withTheme, apply } from '../../redux/theme'

const Brand = ({ title, theme }) => (
  <div className={apply(style, theme)}>
    <span>{title}</span>
  </div>
)

Brand.propTypes = {
  title: PropTypes.string.isRequired,
  theme: PropTypes.objectOf(PropTypes.string),
}

Brand.defaultProps = {
  theme: undefined,
}

export default withTheme(Brand)
