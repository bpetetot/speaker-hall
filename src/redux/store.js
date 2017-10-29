import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { reducer, middleware, enhancer } from './routes'

export default createStore(
  combineReducers({ router: reducer }),
  composeWithDevTools(applyMiddleware(middleware), enhancer),
)
