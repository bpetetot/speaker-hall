import React from 'react'
import PropTypes from 'prop-types'

import Label from '../label'
import './textarea.css'

const Textarea = ({
  name, label, value, placeholder,
}) => (
  <Label name={name} label={label}>
    <textarea name={name} placeholder={placeholder}>
      {value}
    </textarea>
  </Label>
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
