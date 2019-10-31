import {
  ADD_TO_CART,
  CHECKOUT_REQUEST,
  CHECKOUT_FAILURE,
  SUB_FROM_CART,
  TOGGLE_CART
} from '../constants/ActionTypes'

const initialState = {
  addedIds: [],
  quantityById: {},
  isCartOpen: false
}

const addedIds = (state = initialState.addedIds, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.indexOf(action.productId) !== -1) {
        return state
      }
      return [ ...state, action.productId ]
    case SUB_FROM_CART:
      const { product } = action
      if (product.quantity === 1) {
        return state.filter(i => i !== product.id)
      }
      return state
    default:
      return state
  }
}

const quantityById = (state = initialState.quantityById, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { productId } = action
      return { ...state,
        [productId]: (state[productId] || 0) + 1
      }
    case SUB_FROM_CART:
      const { product } = action
      return { ...state,
        [product.id]: state[product.id] - 1
      }
    default:
      return state
  }
}

const isCartOpen = (state = initialState.isCartOpen, action) => {
  switch (action.type) {
    case TOGGLE_CART:
      return !state
    default:
      return state
  }
}

export const getQuantity = (state, productId) =>
  state.quantityById[productId] || 0

export const getAddedIds = state => state.addedIds

export const getIsCartOpen = state => state.isCartOpen

const cart = (state = initialState, action) => {
  switch (action.type) {
    case CHECKOUT_REQUEST:
      return initialState
    case CHECKOUT_FAILURE:
      return action.cart
    default:
      return {
        addedIds: addedIds(state.addedIds, action),
        quantityById: quantityById(state.quantityById, action),
        isCartOpen: isCartOpen(state.isCartOpen, action)
      }
  }
}

export default cart
