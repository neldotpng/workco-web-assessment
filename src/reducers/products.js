import { combineReducers } from 'redux'
import { FETCH_PRODUCTS_SUCCESS, ADD_TO_CART, SUB_FROM_CART, REMOVE_FROM_CART } from '../constants/ActionTypes'

const products = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        inventory: state.inventory - 1
      }
    case SUB_FROM_CART:
      return {
        ...state,
        inventory: state.inventory + 1
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        inventory: state.inventory + action.product.quantity
      }
    default:
      return state
  }
}

const byId = (state = {}, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        ...action.products.reduce((obj, product) => {
          obj[product.id] = product
          return obj
        }, {})
      }
    default:
      const { productId, product } = action
      if (productId) {
        return {
          ...state,
          [productId]: products(state[productId], action)
        }
      } else if (product) {
        return {
          ...state,
          [product.id]: products(state[product.id], action)
        }
      }
      return state
  }
}

const visibleIds = (state = [], action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return action.products.map(product => product.id)
    default:
      return state
  }
}

export default combineReducers({
  byId,
  visibleIds
})

export const getProduct = (state, id) =>
  state.byId[id]

export const getVisibleProducts = state =>
  state.visibleIds.map(id => getProduct(state, id))
