import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'

const App = () => (
  <div className="container">
    <header className="header">
      <h1 className="title">Acme Store</h1>
      <div>Your cart is empty</div>
    </header>
    <ProductsContainer />
    <CartContainer />
  </div>
)

export default App
