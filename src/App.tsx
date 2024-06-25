import React from 'react'
import Cart from './components/cart/Cart'
import Products from './components/product/Products'

export default function App() {
  return (
    <div className='editCSS'>
      <Products></Products>
      <div className='editCSS2'>
        <Cart></Cart>
      </div>
    </div>
  )
}
