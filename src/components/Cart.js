import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Product from './Product'
import CartQuantityControls from './CartQuantityControls'

import cartIcon from '../assets/icons/cart.svg'
import xIcon from '../assets/icons/x.svg'
import image from '../assets/images/chronograph-cart.png'

const Cart = ({ products, subtotal, onCheckoutClicked, toggleCart, isCartOpen, onSubFromCartClicked, onAddToCartClicked, onRemoveFromCartClicked }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map((product, i) =>
      <div className="cart__product"
        key={i}>
        <div className="cart__productInfo">
          <img
            className="cart__product__image"
            src={image}
            alt="Chronograph watch"/>
          <Product
            title={product.title}
            price={product.price}
            quantity={product.quantity}
            key={product.id}
            removeFromCart={() => onRemoveFromCartClicked(product)}
          />
        </div>
        <CartQuantityControls
          product={product}
          subFromCart={onSubFromCartClicked}
          addToCart={onAddToCartClicked} />
      </div>
    )
  ) : (
    <div className="cart__empty">
      <img src={cartIcon} alt="Cart icon"/>
      <em className="cart__empty__message">Please add some products to your cart.</em>
    </div>
  )

  const taxes = Math.round(subtotal * 0.08125 * 100) / 100
  const total = subtotal + taxes
  const cxContainer = cx('cart__container', {
    'is-open': isCartOpen
  })

  return (
    <div className={cxContainer}>
      <div className="cart">
        <div className="cart__close"
          onClick={toggleCart}>
          <img src={xIcon} alt="X icon"/>
        </div>
        <h3 className="cart__header">Your cart</h3>
        <div className="cart__section cart__products">{nodes}</div>
        {subtotal > 0 && (
          <div className="cart__info">
            <div className="cart__section">
              <div className="cart__line">
                <div>Subtotal</div>
                <div className="cart__price">&#36;{subtotal.toFixed(2)}</div>
              </div>
              <div className="cart__line">
                <div>Taxes</div>
                <div className="cart__price">&#36;{taxes.toFixed(2)}</div>
              </div>
            </div>
            <div className="cart__section">
              <div className="cart__line">
                <div>Total</div>
                <div className="cart__price">&#36;{total.toFixed(2)}</div>
              </div>
            </div>
            <div className="cart__update">
              <button className="button button--outline">Update</button>
            </div>
            <div className="cart__checkout">
              <button className="button button--primary"
                onClick={onCheckoutClicked}
                disabled={hasProducts ? '' : 'disabled'}
                key="checkout">
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  subtotal: PropTypes.number,
  onCheckoutClicked: PropTypes.func,
  isCartOpen: PropTypes.bool,
  toggleCart: PropTypes.func,
  onSubFromCartClicked: PropTypes.func,
  onAddToCartClicked: PropTypes.func,
  onRemoveFromCartClicked: PropTypes.func
}

export default Cart
