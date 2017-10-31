import React from 'react'
import PropTypes from 'prop-types'
import { Fragment } from 'redux-little-router'

import Home from './screens/home'
import Layout from './screens/layout'

import withTheme from './styles'

const App = ({ theme }) => (
  <Fragment forRoute="/">
    <div className={theme}>
      <Fragment forRoute="/">
        <Home />
      </Fragment>
      <Fragment forRoute="/app">
        <Layout />
      </Fragment>
    </div>
  </Fragment>
)

App.propTypes = {
  theme: PropTypes.string,
}

App.defaultProps = {
  theme: 'default-theme',
}

export default withTheme(App)
