import React from 'react'
import { ADD_TO_CART, EMPTY_CART, REMOVE_TO_CART } from './ProductData/Constant'
import { useDispatch } from 'react-redux'
import { productData } from './ProductData/ProAction'
import { addTocart, emptycart, removeTocart } from './ProductData/Action'
import Headre from './Headre'

function App() {

   const dispatch =useDispatch()

   const product ={
      name:'iphone',
      color:'matteblue',
      price:60000,
      chip:'M2'
   }
  return (
    <div>
      <Headre/>
      <button onClick={() =>dispatch(addTocart(product))}>Add to cart</button>
      <button onClick= {() => dispatch(removeTocart(product))}>Add to cart</button>
      <button onClick= {() =>dispatch (emptycart())}>Add to cart</button>
      <button onClick= {() =>dispatch (productData())}/>
     
    </div>
  )
}

export default App
