import defaultTheme from '../../styles/themes/default'
import blueTheme from '../../styles/themes/blue'
import redTheme from '../../styles/themes/red'

/** theme store selector */
export const getTheme = state => state.theme

/** reducer changing the theme following the current route */
export default (state = defaultTheme, action) => {
  const { type, payload } = action
  if (type === 'ROUTER_LOCATION_CHANGED') {
    switch (payload.result.type) {
      case 'home':
        return defaultTheme
      case 'speaker':
        return blueTheme
      case 'organizer':
        return redTheme
      default:
        return state
    }
  }
  return state
}
