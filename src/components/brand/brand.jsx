import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import './brand.css'

const Brand = ({ title, className }) => (
  <div className={cn('brand', className)}>
    <span>{title}</span>
  </div>
)

Brand.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
}

Brand.defaultProps = {
  className: undefined,
}

export default Brand
