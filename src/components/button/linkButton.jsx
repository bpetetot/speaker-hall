import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'redux-little-router'
import cn from 'classnames'

import './button.css'

const LinkButton = ({ children, className, ...rest }) => (
  <Link className={cn('btn btn-link', className)} {...rest}>
    {children}
  </Link>
)

LinkButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

LinkButton.defaultProps = {
  className: undefined,
}

export default LinkButton
