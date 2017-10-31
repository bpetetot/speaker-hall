import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'
import style from './input.style'

const Input = ({
  name, label, type, value,
}) => (
  <div className={css(style)}>
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
