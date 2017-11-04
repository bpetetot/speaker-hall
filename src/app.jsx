import React from 'react'
import PropTypes from 'prop-types'
import { Fragment } from 'redux-little-router'

import Home from './screens/home'
import Login from './screens/login'
import Speaker from './screens/speaker'
import Organizer from './screens/organizer'

import withTheme from './styles'

const App = ({ theme }) => (
  <Fragment forRoute="/">
    <div className={theme}>
      <Fragment forRoute="/speaker">
        <Speaker />
      </Fragment>
      <Fragment forRoute="/organizer">
        <Organizer />
      </Fragment>
      <Fragment forRoute="/login">
        <Login />
      </Fragment>
      <Fragment forRoute="/">
        <Home />
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
