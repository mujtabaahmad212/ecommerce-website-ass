import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import productimage from "../assets/images/image 1166.png";
import productimage2 from "../assets/images/image 1.png";
import productimage3 from "../assets/images/image 3.png";
import productimage4 from "../assets/images/image 23.png";
import productimage5 from "../assets/images/image 32.png";

import productimage6 from "../assets/images/image 1169.png";
import productimage7 from "../assets/images/image 1168.png";
import productimage8 from "../assets/images/Shell-Shaped-Armchair-Pink-Velvet-Fabric-One-Seater-Sofa-for-Living-Room 1.png";

import hearticon from "../assets/images/icons8-heart-16.png";
import carticon from "../assets/images/icons8-cart-16.png";


const ProductList = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
       name: 'Product 1',
      image: productimage,
       description: 'This is the description for Product 1.',
      price: 19.71,
      
    },
    {
      id: 2,
       name: 'Product 2',
      image: productimage2,
       description: 'This is the description for Product 2.This is the description for Product 2.',
      price: 21.59,
    },
    {
      id: 2,
       name: 'Product 3',
      image: productimage3,
       description: 'This is the description for Product 2.This is the description for Product 2.',
      price: 29.99,
    },
    {
      id: 2,
       name: 'Product 4',
      image: productimage4,
       description: 'This is the description for Product 2.This is the description for Product 2.',
      price: 26.39,
    },
    {
      id: 2,
      name: 'Product 5',
      image: productimage5,
       description: 'This is the description for Product 2.This is the description for Product 2.',
      price: 32.68,

    },
    {
      id: 2,
      name: 'Product 5',
      image: productimage6 ,
       description: 'This is the description for Product 2.This is the description for Product 2.',
       price: 14.32,

    },
    {
      id: 2,
      name: 'Product 5',
      image: productimage7,
       description: 'This is the description for Product 2.This is the description for Product 2.',
      price: 18.32,

    },
    {
      id: 2,
      name: 'Product 5',
      image: productimage8,
       description: 'This is the description for Product 2.This is the description for Product 2.',
      price: 44.68,

    },
    // Add more products here
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <>
      <div className="">
        <ul className="flex flex-wrap justify-center items-center m-3 w-screen rounded-2xl p-16">
          {products.map((product) => (

            <li key={product.id} className="flex flex-col justify-center relative items-center m-3 w-80 rounded-[2rem]  bg-[#B7C0EE] text-stone-200 shadow-lg shadow-[rgba(0, 0, 0, 0.59)] h-96 z-1 ">

              <div className="w-full flex justify-center items-center p-3 bg-[#7067CF] hover:bg-[#7067CF] transition-all  cursor-pointer duration-500 opacity-0 hover:opacity-100 h-full rounded-[2rem] ">

            <img className=" absolute left-2  z-30 bg-white w-10 p-1 rounded-md mb-9 active:bg-yellow-600   duration-500  " src={carticon} 
            alt="cart icon" onClick={() => addToCart(product)} />
            <img className=" absolute left-2 bottom-36  z-30 bg-white w-10 p-1 rounded-md active:bg-pink-500   duration-500 " src={hearticon} 
            alt="cart icon" />
                
              </div>
            {/* image */}
            <img className="h-52 hover:h-56 w-52 absolute z-10  hover:w-56  transition-all duration-500  hover:scale-150 hover:rotate-6 hover:rounded-[3rem]  " src={product.image} alt={product.name} />
              {/* <div className="flex flex-col gap-2 text-justify"> */}

                {/* <h3 className="text-2xl text-slate-900 font-bold ">{product.name}</h3>
                <p>{product.description}</p> */}
                {/* price */}
                <p className="bg-purple-950 w-28 py-2 bottom-4 left-4 rounded-xl text-center absolute">Price: ${product.price.toFixed(2)}</p>
              {/* </div> */}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ProductList;