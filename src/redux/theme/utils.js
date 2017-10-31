import { css } from 'glamor'
import { connect } from 'react-redux'
import mapValues from 'lodash/mapValues'
import isObject from 'lodash/isObject'
import templateSettings from 'lodash/templateSettings'
import template from 'lodash/template'

import { getTheme } from './theme'

/** use of lodash template system to interpolate {{ }} placeholder */
templateSettings.interpolate = /{{([\s\S]+?)}}/g

/** map object values recursively */
const mapValuesDeep = (v, cb) => (isObject(v) ? mapValues(v, sub => mapValuesDeep(sub, cb)) : cb(v))

/** apply the given style to glamor's css with theming */
export const apply = (style, theme = {}) => css(mapValuesDeep(style, v => template(v)(theme)))

/** HoC setting the current theme to a component */
export const withTheme = (Component) => {
  const mapState = state => ({
    theme: getTheme(state),
  })
  return connect(mapState)(Component)
}
