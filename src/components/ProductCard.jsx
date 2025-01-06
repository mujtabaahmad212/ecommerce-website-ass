import React from 'react';
import productImage from '../assets/images/pexels-madebymath-90946.jpg'; // Import the image

const ProductCard = () => {
  return (
    <div className='w-60 
    hover:rounded-3xl  
    rounded-3xl  
    shadow-black 
    hover:shadow-2xl  
    transition-all 
    transform 
     text-zinc-700
    hover:bg-[#061934] 
   hover:text-[#6380bb] 
    pb-4  
    border
    border-gray-500' > 
      {/* Image */}
      <img src={productImage} alt="Product" className='
      rounded-t-3xl  
      transition 
      duration-500  
      hover:shadow-xl 
      hover:-translate-y-2 
      mb-3 '  /> 

      <h1 className='
      font-bold
      text-2xl
     
      
      '>Product card Page</h1>
      <p className='
      text-justify
      px-2
    
      ' >This is a great product that you will love. It has many amazing features and benefits that make it a must-have item.</p>
    </div>
  );
};

export default ProductCard;
