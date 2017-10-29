import React from 'react'
import { Fragment } from 'redux-little-router'
import { Provider } from 'react-redux'

import store from './redux'
import Home from './screens/home'
import Layout from './screens/layout'

const App = () => (
  <Provider store={store}>
    <Fragment forRoute="/">
      <div style={{ height: '100%' }}>
        <Fragment forRoute="/">
          <Home />
        </Fragment>
        <Fragment forRoute="/app">
          <Layout />
        </Fragment>
      </div>
    </Fragment>
  </Provider>
)

export default App
