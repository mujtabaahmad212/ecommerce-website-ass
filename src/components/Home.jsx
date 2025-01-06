import React from 'react';
import ProductCard from './ProductCard'; 

const Home = () => {
  return (
   <>
  <body className='bg-gray-300'>
    
  
    <div className='flex justify-center items-center h-[60vh] mx-2 rounded-2xl  bg-gray-500 mb-8'>
      
      </div>
      <div className="">
        <h1 className="text-2xl text-center">Home Page</h1>
        <h1 className="text-2xl text-center first-letter:text-red-700 font-bold ">Feartured Products </h1>
      </div>
<div className=" flex justify-around items-center gap-4 flex-wrap  mx-6">
<ProductCard />
<ProductCard />
<ProductCard />
<ProductCard />
<ProductCard />
</div>
       </body>
      </>
  );
};

export default Home;
