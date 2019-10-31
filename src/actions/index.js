import shop from '../api/shop'
import * as types from '../constants/ActionTypes'

const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products: products
})

export const getAllProducts = () => dispatch => {
  shop.getProducts(products => {
    dispatch(receiveProducts(products))
  })
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
