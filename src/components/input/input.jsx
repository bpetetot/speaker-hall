import React from 'react'
import PropTypes from 'prop-types'

import './input.css'

const Input = ({
  name, label, type, value, placeholder,
}) => (
  <div className="form-input">
    {label && <label htmlFor={name}>{label}</label>}
    <input id={name} type={type} defaultValue={value} placeholder={placeholder} />
  </div>
)

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
}

Input.defaultProps = {
  label: undefined,
  value: undefined,
  placeholder: undefined,
}

export default Input
