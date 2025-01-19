import React, { useState } from "react";
import heroimage1 from "../assets/images/Home-Stylish-Club-Sofa-Chair-Pleated-Sofa-Armchair-with-Golden-Legs 1.png"
import herobgimg from "../assets/images/blob-haikei.png"


const Hero = () => {

  return (
    <>
<h1 className="text-3xl font-bold capitalize first-letter:text-red-600 text-center my-7">hero section</h1>


<div className="w-screen flex justify-center items-center bg-[#040404] text-stone-300">
  <div className=" relative w-[40vw]    h-[72vh]" >
    <img src={herobgimg} alt="" className=" absolute size-full  "/>
    <img src={heroimage1} alt=""  className=" absolute w-[30vw] z-40 left-16 top-0 " />
  </div>
  <div className="">
    <h1 className="text-3xl font-bold " >Unique Features Of leatest &
    Trending Poducts</h1>


<div className=" flex flex-col gap-2 my-6 ">
    <div className="flex items-center gap-2">
      <div className="w-4 h-4 bg-red-300 rounded-full "></div>
    <p> All frames constructed with hardwood solids and laminates</p>
    </div>
    <div className="flex items-center gap-2">
    <div className="w-4 h-4 bg-blue-300 rounded-full "></div>
    <p> Reinforced with double wood dowels, glue, screw - nails corner 
    blocks and machine nails</p>
    </div>
   <div className="flex items-center gap-2">
   <div className="w-4 h-4 bg-green-300 rounded-full "></div>
   <p> Arms, backs and seats are structurally reinforced</p>
   </div>
   <div className="flex items-center gap-4 my-5">
    <button className="bg-[#0C7489] px-6 py-3 rounded-md hover:bg-[#119DA4]  font-bold">Add To Cart</button>
   <div className="">
    <p>B&B Italian Sofa </p>
    <p>$32.00</p>
   </div>
   </div>
    </div>
  </div>
  
</div>



    </>
  )
}
export default Hero;