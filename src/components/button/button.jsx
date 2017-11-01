import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import './button.css'

const Button = ({ className, children, ...rest }) => (
  <button className={cn('btn btn-primary', className)} {...rest}>
    {children}
  </button>
)

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Button.defaultProps = {
  className: undefined,
}

export default Button
