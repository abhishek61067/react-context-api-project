import React, { useContext, useState } from "react";
import Header from "./Header";
import { faker } from "@faker-js/faker";
import SingleProduct from "./SingleProduct";
import {useEffect} from 'react'
import {CartContext} from '../Context'

const Home = () => {

  faker.seed(5); 
  let productsArray = []
  productsArray = [...new Array(5)].map((el) => {
    return {
      id: faker.datatype.uuid(),
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      image: faker.image.urlLoremFlickr({ category: "abstract" }),
    };
  });

  // state of products
  const [products] = useState(productsArray);
  return (
    <>
      <div className="product--container d-flex justify-content-between gap-3">
        {products.map((product) => {
          return (
            <div className="">
              {/* {(cart?.includes(product))?'':<SingleProduct prod={product} cart={cart} setCart={setCart}/>
} */}
            <SingleProduct prod={product}/>

              {/* passing prod,cart,and setCart as a props to SingleProduct component */}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
