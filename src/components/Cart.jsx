import React, { useContext } from 'react'
import Header from './Header'
import SingleProduct from './SingleProduct'
import { useState, useEffect } from 'react'
import {CartContext} from '../Context'

const Cart = () => {
const {cart,setCart} = useContext(CartContext)
const [total, setTotal] = useState(0);

useEffect(()=>{
  // state management of total in cart page
setTotal(
    cart.reduce((accumulator,current)=>{
return accumulator+Number(current.price)
    },0)
);
},[cart])

  console.log('cart in cart.jsx: ', cart);
  return (
    <>
    <span>My cart</span>
    <div>Total:</div>
    <b>{total}</b>
    <div className="product-container d-flex justify-content-between gap-2 gap-3">
{
  cart.map((product)=>{
    return <SingleProduct prod={product} cart={cart} setCart={setCart}/>
  })
}
    </div>
    </>
  )
}

export default Cart