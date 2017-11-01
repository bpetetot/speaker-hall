import React from 'react'
import PropTypes from 'prop-types'

import './textarea.css'

const Textarea = ({
  name, label, value, placeholder,
}) => (
  <div className="form-input">
    {label && <label htmlFor={name}>{label}</label>}
    <textarea name={name} placeholder={placeholder}>
      {value}
    </textarea>
  </div>
)

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
}

Textarea.defaultProps = {
  label: undefined,
  value: undefined,
  placeholder: undefined,
}

export default Textarea
