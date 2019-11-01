import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { checkout, toggleCart, subFromCart, addToCart, removeFromCart } from '../actions'
import { getTotal, getCartProducts, isCartOpen } from '../reducers'
import Cart from '../components/Cart'

const CartContainer = ({ products, subtotal, checkout, toggleCart, isCartOpen, subFromCart, addToCart, removeFromCart }) => (
  <Cart
    products={products}
    subtotal={subtotal}
    onCheckoutClicked={() => checkout(products)}
    toggleCart={toggleCart}
    isCartOpen={isCartOpen}
    onSubFromCartClicked={subFromCart}
    onAddToCartClicked={addToCart}
    onRemoveFromCartClicked={removeFromCart} />
)

CartContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    productTitle: PropTypes.string.isRequired,
    price: PropTypes.shape({
      currency: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired
    }).isRequired,
    quantity: PropTypes.number.isRequired
  })).isRequired,
  subtotal: PropTypes.number,
  checkout: PropTypes.func.isRequired,
  toggleCart: PropTypes.func.isRequired,
  isCartOpen: PropTypes.bool.isRequired,
  subFromCart: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  subtotal: getTotal(state),
  isCartOpen: isCartOpen(state)
})

export default connect(
  mapStateToProps,
  { checkout, toggleCart, subFromCart, addToCart, removeFromCart }
)(CartContainer)
