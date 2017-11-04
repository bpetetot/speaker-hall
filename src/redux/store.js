import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { reducer, middleware, enhancer } from './routes'

import { initFirebase } from '../firebase'
import auth from './auth'

/** create redux store */
const store = createStore(
  combineReducers({ router: reducer, auth }),
  composeWithDevTools(applyMiddleware(middleware, thunk), enhancer),
)

/** initialize firebase */
initFirebase(store)

export default store
