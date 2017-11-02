import React from 'react'
import PropTypes from 'prop-types'

import './radioBox.css'

const RadioBox = ({
  name, value, checked, children,
}) => (
  <div className="form-radio">
    <input
      name={name}
      id={`${name}-${value}`}
      value={value}
      defaultChecked={checked}
      type="radio"
    />
    <label htmlFor={`${name}-${value}`}>{children}</label>
  </div>
)

RadioBox.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

RadioBox.defaultProps = {
  checked: false,
}

export default RadioBox
