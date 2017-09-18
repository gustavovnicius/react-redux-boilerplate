import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from 'reducers';
import AppPage from 'containers/AppPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk, createLogger()),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),
);

render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={AppPage} />
    </Router>
  </Provider>,
  document.getElementById('app'),
);
