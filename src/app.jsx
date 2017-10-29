import React from 'react'
import { Fragment } from 'redux-little-router'
import { Provider } from 'react-redux'

import store from './redux'
import Home from './screens/home'
import Speaker from './screens/speaker'
import Organizer from './screens/organizer'

const App = () => (
  <Provider store={store}>
    <Fragment forRoute="/">
      <div>
        <Fragment forRoute="/">
          <Home />
        </Fragment>
        <Fragment forRoute="/speaker">
          <Speaker />
        </Fragment>
        <Fragment forRoute="/organizer">
          <Organizer />
        </Fragment>
      </div>
    </Fragment>
  </Provider>
)

export default App
