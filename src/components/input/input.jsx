import React from 'react'
import PropTypes from 'prop-types'

import './input.css'

const Input = ({
  name, label, type, value,
}) => (
  <div className="form-input">
    <label htmlFor={name}>{label}</label>
    <input id={name} type={type} defaultValue={value} />
  </div>
)

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  type: PropTypes.string.isRequired,
}

Input.defaultProps = {
  value: undefined,
}

export default Input
