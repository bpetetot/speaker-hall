import React from 'react'
import PropTypes from 'prop-types'

import './label.css'

const Label = ({ name, label, children }) => (
  <div className="form-input">
    {label && <label htmlFor={name}>{label}</label>}
    {children}
  </div>
)

Label.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Label.defaultProps = {
  label: undefined,
}

export default Label
