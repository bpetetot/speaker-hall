import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import './brand.css'

const Brand = ({ title, type, className }) => (
  <div className={cn(`brand brand-${type}`, className)}>
    <span>{title}</span>
  </div>
)

Brand.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
}

Brand.defaultProps = {
  className: undefined,
}

export default Brand
