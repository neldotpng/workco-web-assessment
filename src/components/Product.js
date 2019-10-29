import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ price, inventory, title, quantity }) => (
  <div className="product">
    {quantity ? (
      <div>
        Placeholder
      </div>
    ) : [
      <div>
        <h2 className="product__title">
          {title}
        </h2>
        <div className="product__inventory">
          {inventory} remaining
        </div>
      </div>,
      <span className="product__price">
        ${price}
      </span>
    ]}
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string,
  quantity: PropTypes.number
}

export default Product
