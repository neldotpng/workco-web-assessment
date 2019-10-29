import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

import image from '../assets/images/chronograph.png'

const ProductItem = ({ product, onAddToCartClicked }) => (
  <div className="productItem">
    <img
      className="productItem__image"
      src={image}
      alt=""/>
    <div className="productItem__info">
      <Product
        title={product.title}
        price={product.price}
        inventory={product.inventory} />
      <button
        className="button button--primary"
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
