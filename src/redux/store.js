import { combineReducers, createStore, applyMiddleware } from 'redux'
import { initializeCurrentLocation } from 'redux-little-router'
import { composeWithDevTools } from 'redux-devtools-extension'
import { reducer, middleware, enhancer } from './routes'

import theme from './theme'

const store = createStore(
  combineReducers({ router: reducer, theme }),
  composeWithDevTools(applyMiddleware(middleware), enhancer),
)

const initialLocation = store.getState().router
if (initialLocation) {
  store.dispatch(initializeCurrentLocation(initialLocation))
}

export default store
