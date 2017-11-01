import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import './badge.css'

const Badge = ({ children, className, ...rest }) => {
  const classes = cn('badge', 'badge-default', className)
  return (
    <span className={classes} {...rest}>
      {children}
    </span>
  )
}

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

Badge.defaultProps = {
  className: undefined,
}

export default Badge
