import React from 'react'
import PropTypes from 'prop-types'

const CartQuantityControls = ({ product, subFromCart, addToCart }) => {
  const hasInventory = product.inventory > 0
  const quantityNotNegative = product.quantity >= 0

  return (
    <div className="cartQuantityControls">
      <button className="button button--secondary button--left button--icon"
        disabled={!quantityNotNegative}
        onClick={() => subFromCart(product)}>
        <svg width="16" height="2" viewBox="0 0 16 2" xmlns="http://www.w3.org/2000/svg">
          <title>Minus Icon</title>
          <path d="M1 1h14" stroke="#8E939C" strokeWidth="2" fill="none" fillRule="evenodd" strokeLinecap="square"/>
        </svg>
      </button>
      <div className="cartQuantityControls__quantity">{product.quantity}</div>
      <button className="button button--secondary button--right button--icon"
        disabled={!hasInventory}
        onClick={() => addToCart(product.id)}>
        <svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg">
          <title>Plus Icon</title>
          <path d="M1.333 7.5h13.35M8 1v13" stroke="#8E939C" strokeWidth="2" fill="none" fillRule="evenodd" strokeLinecap="square"/>
        </svg>
      </button>
    </div>
)}

CartQuantityControls.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
  }).isRequired
}

export default CartQuantityControls
