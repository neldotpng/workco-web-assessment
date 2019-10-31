import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import CartButton from '../components/CartButton'

const App = () => (
  <div className="container">
    <header className="header">
      <h1 className="title">Acme Store</h1>
      <CartButton />
    </header>
    <ProductsContainer />
    <CartContainer />
  </div>
)

export default App
