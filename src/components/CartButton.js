import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getCartProducts } from '../reducers'
import { toggleCart } from '../actions'

const CartButton = ({ products, toggleCart }) => (
  <button className="cartButton textButton textButton--primary button--icon"
    onClick={toggleCart}>
    <svg width="17" height="14" viewBox="0 0 17 14" xmlns="http://www.w3.org/2000/svg">
      <title>Cart icon</title>
      <path d="M16.934 3.873a.36.36 0 0 0-.293-.151H3.534L2.566.262A.359.359 0 0 0 2.22 0H.36a.36.36 0 0 0 0 .718h1.588L4.21 8.801a1.528 1.528 0 0 0-1.502 1.525c0 .841.684 1.526 1.526 1.526h.46a1.176 1.176 0 0 0 1.082 1.631 1.176 1.176 0 0 0 1.083-1.63h3.803a1.176 1.176 0 0 0 1.057 1.683 1.176 1.176 0 0 0 1.058-1.684h.63a.36.36 0 0 0 0-.718H4.236a.81.81 0 0 1 0-1.616h10.639c.179 0 .327-.133.353-.306L16.98 4.2a.36.36 0 0 0-.046-.326zm-5.214 8.944a.457.457 0 1 1 .001-.914.457.457 0 0 1 0 .914zm-5.486-.509a.457.457 0 1 1-.914-.001.457.457 0 0 1 .914.001zm9.622-7.07h-2.472l.114-.798h2.637l-.28.798zm-.618 1.765h-2.105l.15-1.047h2.322l-.367 1.047zM14.61 8.8h-1.732l.153-1.077h1.956l-.377 1.077zm-4.297 0V7.722h1.993l-.154 1.077h-1.84zm-2.559 0l-.153-1.077h1.993v1.077h-1.84zm-2.798 0l-.302-1.077h2.222l.153 1.077H4.956zm5.357-3.561V4.44h2.459l-.113.798h-2.346zm2.244.718l-.15 1.047h-2.094V5.956h2.244zm-2.963-.718H7.248l-.113-.798h2.46v.798zm0 .718v1.047H7.5L7.35 5.956h2.244zm-2.82 1.047h-2.32L4.16 5.956h2.465l.148 1.047zM6.408 4.44l.113.798H3.96l-.223-.798h2.673z" fill="#292929" fillRule="nonzero"/>
    </svg>

    {products.length > 0 ? (
      <p>Cart ({products.length})</p>
    ) : (
      <p>Your cart is empty</p>
    )}
  </button>
)

CartButton.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    productTitle: PropTypes.string.isRequired,
    price: PropTypes.shape({
      currency: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired
    }).isRequired,
    quantity: PropTypes.number.isRequired
  })).isRequired,
  toggleCart: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  products: getCartProducts(state)
})

export default connect(
  mapStateToProps,
  { toggleCart }
)(CartButton)
