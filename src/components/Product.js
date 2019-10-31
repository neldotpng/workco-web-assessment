import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ price, inventory, title, quantity }) => (
  <div className="product">
    {quantity ? (
      <div className="product__info">
        <div>
          <h2 className="product__title">{title}</h2>
          <span className="product__price"
            key="price">
            ${price}
          </span>
        </div>
        <button className="textButton textButton--remove">Remove</button>
      </div>
    ) : [
      <div key="title">
        <h2 className="product__title">{title}</h2>
        <div className="product__inventory">{inventory} remaining</div>
      </div>,
      <span className="product__price"
        key="price">
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
