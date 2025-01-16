import React from 'react';
import productImage from '../assets/images/pexels-madebymath-90946.jpg'; // Import the image

const ProductCard = () => {
  return (
    <div className='
    
    w-72
    h-80 
    hover:rounded-3xl  
    rounded-3xl  
    shadow-black 
    hover:shadow-2xl
    transition-all 
    duration-300
     text-zinc-700
    hover:bg-[#0a0a0a] 
   hover:text-[#f5f5f5] 
    pb-4  
    border
    border-gray-500 hover:translate-x-3 hover:translate-y-3' > 
      {/* Image */}
      <img src={productImage} alt="Product" 
      className='
      rounded-t-3xl  
      transition 
      duration-500  
      hover:shadow-xl 
      hover:-translate-y-2 
      mb-3 
      hover:border
      hover:border-black '  /> 

      <h1 className='
      font-bold
      text-2xl
      px-3
      
      '>Product card Page</h1>
      <p className='
      text-justify
      px-5
    
      ' > It has many amazing features and benefits that make it a must-have item.
      </p>
    </div>
  );
};

export default ProductCard;
