import React from "react";
import { Link } from "react-router-dom";
import {useContext} from 'react'
import {CartContext} from '../Context'

const Header = () => {
  const {cart,setCart} = useContext(CartContext)
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">Cart <b>({cart.length})</b></Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
