import React from "react";
import productImage1 from "../assets/images/image 1166.png"; 
import productImage2 from "../assets/images/image 1171.png"; 
import productImage3 from "../assets/images/image 31.png"; 
import productImage4 from "../assets/images/image 1162.png"; 
import productImage5 from "../assets/images/image 1161.png"; 
import productImage6 from "../assets/images/image 19.png";
import productImage7 from "../assets/images/image 28.png";
import productImage8 from "../assets/images/image 30.png";

const trendingproduct = [
  {
    id: 1,
    name: 'Product 1',
    image: productImage1,
    description: 'This is the description for Product 1.',
    price: 19.71,
  },
  {
    id: 2,
    name: 'Product 2',
    image: productImage2,
    description: 'This is the description for Product 2.This is the description for Product 2.',
    price: 21.59,
  },
  {
    id: 3,
    name: 'Product 3',
    image: productImage3,
    description: 'This is the description for Product 2.This is the description for Product 2.',
    price: 29.99,
  },
];

const Trendingproducts = () => {
  return (
    <>
      <div className="flex justify-center items-center gap-4 flex-wrap">
        {trendingproduct.map((product) => (
          <div key={product.id} className="h-96 flex-col w-96 text-center px-4 bg-[#f5f5f5] rounded-3xl shadow-xl flex justify-around items-center">
            <div className="w-full flex justify-center items-center bg-slate-300 rounded-lg">
              <img src={product.image} alt="Product" className='w-56 h-56 hover:-translate-y-5 transition-all duration-500' />
            </div>
            <div className="flex flex-col gap-2 w-full text-justify h-32 px-8"> 
              <h1 className="text-2xl font-bold">{product.name}</h1>
              <p>{product.description}</p>
              <p>${product.price}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center gap-4 mt-8">
        <div className="flex justify-center items-center flex-col bg-[#DDDCDF] rounded-xl shadow-xl px-4 py-2">
          <div className="rounded-3xl w-full h-60">
            <h1 className="text-3xl font-bold">23% off in all products</h1>
            <button className="mt-4 px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-400">Shop Now</button>
            <div className="h-32 relative w-full">
              <img src={productImage4} alt="chair" className="w-36 absolute h-36 right-0" />
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center flex-col bg-[#D5D1E7] rounded-xl shadow-xl px-4 py-2">
          <div className="rounded-3xl w-full h-60">
            <h1 className="text-3xl font-bold">23% off in all products</h1>
            <button className="mt-4 px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-400">View Collection</button>
            <div className="h-32 relative w-full">
              <img src={productImage5} alt="chair" className="w-38 absolute h-32 right-0" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mt-8 flex-col bg-[#EFF8E2] rounded-lg shadow-xl px-4 gap-4 py-2">
        <div className="flex items-center gap-6">
          <img src={productImage6} alt="" className="bg-[#CED0CE] rounded-lg" />
          <div>
            <h1>Executive Seat chair</h1>
            <p>$32.00</p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <img src={productImage7} alt="" className="bg-[#CED0CE] rounded-lg" />
          <div>
            <h1>Executive Seat chair</h1>
            <p>$32.00</p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <img src={productImage8} alt="" className="bg-[#CED0CE] rounded-lg" />
          <div>
            <h1>Executive Seat chair</h1>
            <p>$32.00</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trendingproducts;