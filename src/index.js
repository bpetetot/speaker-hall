/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import ReactDOM from 'react-dom'

import 'normalize.css'
import 'font-awesome/css/font-awesome.min.css'

import App from './app'
import registerServiceWorker from './registerServiceWorker'

import './styles/global.css'

ReactDOM.render(<App />, document.getElementById('root'))

registerServiceWorker()
