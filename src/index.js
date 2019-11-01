import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './reducers'
import { fetchPosts } from './actions'
import App from './containers/App'
import './styles/main.scss';

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

const ENDPOINT = 'http://tech.work.co/shopping-cart/products.json'

store.dispatch(fetchPosts(ENDPOINT))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
