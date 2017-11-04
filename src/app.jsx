import React from 'react'
import PropTypes from 'prop-types'
import { Fragment } from 'redux-little-router'

import PrivateFragment from './components/privateFragment'
import Home from './screens/home'
import Layout from './screens/layout'

import withTheme from './styles'

const App = ({ theme }) => (
  <Fragment forRoute="/">
    <div className={theme}>
      <PrivateFragment forRoute="/app">
        <Layout />
      </PrivateFragment>
      <Home />
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
