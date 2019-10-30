import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

import cartIcon from '../assets/icons/cart.svg'
import xIcon from '../assets/icons/x.svg'

const Cart  = ({ products, subtotal, onCheckoutClicked }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product =>
      <Product
        title={product.title}
        price={product.price}
        quantity={product.quantity}
        key={product.id}
      />
    )
  ) : (
    <div className="cart__empty">
      <img src={cartIcon} alt="Cart icon"/>
      <em className="cart__empty__message">Please add some products to your cart.</em>
    </div>
  )

  const taxes = Math.round(subtotal * 0.08067 * 100) / 100
  const total = subtotal + taxes

  return (
    <div className="cart__container">
      <div className="cart">
        <div className="cart__close">
          <img src={xIcon} alt="X icon"/>
        </div>
        <h3 className="cart__header">
          Your cart
        </h3>
        <div className="cart__section cart__products">
          {nodes}
        </div>
        {subtotal > 0 && [
          <div className="cart__section"
            key="subtotal">
            <div className="cart__line">
              <div>Subtotal</div>
              <div className="cart__price">&#36;{subtotal.toFixed(2)}</div>
            </div>
            <div className="cart__line">
              <div>Taxes</div>
              <div className="cart__price">&#36;{taxes.toFixed(2)}</div>
            </div>
          </div>,
          <div className="cart__section"
            key="total">
            <div className="cart__line">
              <div>Total</div>
              <div className="cart__price">&#36;{total.toFixed(2)}</div>
            </div>
          </div>,
          <div className="cart__checkout">
            <button className="button button--primary"
              onClick={onCheckoutClicked}
              disabled={hasProducts ? '' : 'disabled'}
              key="checkout">
              Checkout
            </button>
          </div>
        ]}
      </div>
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  subtotal: PropTypes.number,
  onCheckoutClicked: PropTypes.func
}

export default Cart
