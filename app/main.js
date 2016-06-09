import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import reducers from './reducers/index'
import AppPage from './containers/AppPage'
import Routes from './routes'

import { Router, hashHistory } from 'react-router'

let store = createStore(reducers, compose(applyMiddleware(thunk, createLogger()), window.devToolsExtension ? window.devToolsExtension() : f => f))

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Routes />
    </Router>
  </Provider>,
  document.getElementById('app')
)
