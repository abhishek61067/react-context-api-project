import React from 'react'
import {useContext} from 'react'
import {CartContext} from '../Context'

const SingleProduct = ({prod}) => {
const {cart,setCart} = useContext(CartContext);
return (
<div className='products border-1 p-2'>
<img src={prod.image} alt={prod.name} width={200} height={200} />
<div className="prodDesc">
  <span style={{fontWeight:700}}>{prod.name}</span>
  <span>Rs. {prod.price.substring(0,3)}</span>
</div>
{cart.includes(prod)?(
// button to remove product from cart 
<div className="add text-white bg-red p-2 cursor-pointer" onClick={(e)=>{
  /* removing product from cart */
  setCart(cart.filter((el)=>{
return el.id !== prod.id
  }))
}}>Remove from cart</div>):(
  /* button to add product to cart */
  <div className="add text-white bg-black p-2 cursor-pointer" onClick={()=>{
    // adding product to cart
    setCart([...cart,prod])
  }}>Add to cart</div>
)

}



    </div>
  )
}

export default SingleProduct