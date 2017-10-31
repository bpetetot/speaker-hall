import React from 'react'
import PropTypes from 'prop-types'
import { Fragment } from 'redux-little-router'

import { apply, withTheme } from './redux/theme'
import Home from './screens/home'
import Layout from './screens/layout'

import style from './app.style'

const App = ({ theme }) => (
  <Fragment forRoute="/">
    <div className={apply(style, theme)}>
      <Fragment forRoute="/app/*">
        <Layout />
      </Fragment>
      <Fragment forRoute="/">
        <Home />
      </Fragment>
      <Fragment forNoMatch>
        <div>404 not found :(</div>
      </Fragment>
    </div>
  </Fragment>
)

App.propTypes = {
  theme: PropTypes.objectOf(PropTypes.string),
}

App.defaultProps = {
  theme: undefined,
}

export default withTheme(App)
