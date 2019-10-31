import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

import di from '../assets/images/chronograph.png'
import ti from '../assets/images/chronograph-tablet.png'
import mi from '../assets/images/chronograph-mobile.png'


const ProductItem = ({ product, onAddToCartClicked }) => (
  <div className="productItem">
    <img
      className="productItem__image"
      srcSet={`${mi} 480w, ${ti} 1024w, ${di} 1280w`}
      src={di}
      alt="Chronograph watch"/>
    <div className="productItem__info">
      <Product
        title={product.title}
        price={product.price}
        inventory={product.inventory} />
      <button
        className="productItem__add button button--primary button--shrink"
        onClick={onAddToCartClicked}
        disabled={product.inventory > 0 ? '' : 'disabled'}>
        Add to cart
      </button>
    </div>
  </div>
)

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductItem
