import fetch from 'cross-fetch'
import shop from '../api/shop'
import * as types from '../constants/ActionTypes'

const requestProducts = url => ({
  type: types.FETCH_PRODUCTS_REQUEST,
  url
})

const receiveProducts = (url, json) => ({
  type: types.FETCH_PRODUCTS_SUCCESS,
  url,
  products: json,
  receivedAt: Date.now()
})

export const fetchPosts = url => {
  return dispatch => {
    dispatch(requestProducts(url))
    return fetch(url)
      .then(response => response.json())
      .then(json => dispatch(receiveProducts(url, json)))
  }
}

const addToCartUnsafe = productId => ({
  type: types.ADD_TO_CART,
  productId
})

export const addToCart = productId => (dispatch, getState) => {
  if (getState().products.byId[productId].inventory > 0) {
    dispatch(addToCartUnsafe(productId))
  }
}

export const checkout = products => (dispatch, getState) => {
  const { cart } = getState()

  dispatch({
    type: types.CHECKOUT_REQUEST
  })
  shop.buyProducts(products, () => {
    dispatch({
      type: types.CHECKOUT_SUCCESS,
      cart
    })
  })
}

export const toggleCart = () => dispatch => {
  dispatch({ type: types.TOGGLE_CART })
}

const subFromCartUnsafe = product => ({
  type: types.SUB_FROM_CART,
  product
})

export const subFromCart = product => (dispatch, getState) => {
  if (getState().cart.quantityById[product.id] > 0) {
    dispatch(subFromCartUnsafe(product))
  }
}

const removeFromCartUnsafe = product => ({
  type: types.REMOVE_FROM_CART,
  product
})

export const removeFromCart = product => (dispatch, getState) => {
  if (getState().cart.quantityById[product.id] > 0) {
    dispatch(removeFromCartUnsafe(product))
  }
}
