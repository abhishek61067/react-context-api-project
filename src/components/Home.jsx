import React, { useState } from "react";
import Header from "./Header";
import { faker } from "@faker-js/faker";
import SingleProduct from "./SingleProduct";

faker.seed(40); 

const Home = ({ names = "Home" }) => {

  // state of cart
const [cart, setCart] = useState([]);

  const productsArray = [...new Array(20)].map((el) => {
    return {
      id: faker.datatype.uuid(),
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      image: faker.image.urlLoremFlickr({ category: "abstract" }),
    };
  });

  // state of products
  const [products] = useState(productsArray);


  console.log("products: ", productsArray);
  console.log('cart: ', cart);
  return (
    <>
    <Header/>
      <div className="product--container d-flex justify-content-between gap-3">
        {products.map((product) => {
          return (
            <div className="">
              {/* passing prod,cart,and setCart as a props to SingleProduct component */}
            <SingleProduct prod={product} cart={cart} setCart={setCart}/>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
