import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import './radioGroup.css'

const RadioGroup = ({ children, inline, className }) => {
  const classes = cn('form-radio-group', className, {
    'form-radio-group-inline': inline,
    'form-radio-group-col': !inline,
  })
  return <div className={classes}>{children}</div>
}

RadioGroup.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  inline: PropTypes.bool,
  className: PropTypes.string,
}

RadioGroup.defaultProps = {
  inline: false,
  className: undefined,
}

export default RadioGroup
