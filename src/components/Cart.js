import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import Product from './Product'
import { isCartOpen } from '../reducers'
import { toggleCart } from '../actions'

import cartIcon from '../assets/icons/cart.svg'
import xIcon from '../assets/icons/x.svg'
import image from '../assets/images/chronograph-cart.png'

const Cart = ({ products, subtotal, onCheckoutClicked, toggleCart, isCartOpen }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product =>
      <div className="cart__product">
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
          />
        </div>
        <div className="cart__product__quantityControls">
          <button className="button button--secondary button--left">
            <svg className="button__icon" width="16" height="2" viewBox="0 0 16 2" xmlns="http://www.w3.org/2000/svg"><title>Remove</title><path d="M1 1h14" stroke="#8E939C" strokeWidth="2" fill="none" fillRule="evenodd" strokeLinecap="square"/></svg>
          </button>
          <div className="cart__product__quantity">{product.quantity}</div>
          <button className="button button--secondary button--right">
            <svg className="button__icon" width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><title>Add</title><g stroke="#8E939C" strokeWidth="2" fill="none" fillRule="evenodd" strokeLinecap="square"><path d="M1.333 7.5h13.35M8 1v13"/></g></svg>
          </button>
        </div>
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
  onCheckoutClicked: PropTypes.func,
  isCartOpen: PropTypes.bool,
  toggleCart: PropTypes.func
}

const mapStateToProps = (state) => ({
  isCartOpen: isCartOpen(state),
})

export default connect(
  mapStateToProps,
  { toggleCart }
)(Cart)
