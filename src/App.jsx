import React from 'react'
import './App.css'
import { CiHeart } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Navbar from "./costumComponents/Navbar.jsx";
import Home from './costumComponents/Home.jsx';
import Pages from './costumComponents/Pages.jsx';
import Product from './costumComponents/Product.jsx';
import Blog from './costumComponents/Blog.jsx';
import Shop from './costumComponents/Shop.jsx';
import Contact from './costumComponents/Contact.jsx';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <div className="bg-purple-600 flex justify-between p-4 font-mono h-8 text-white">
        <div className="flex justify-center items-center gap-5 ">
          <p className='flex justify-center items-center gap-2 cursor-pointer'>
            <MdEmail />user@gmail.com
          </p>
          <p className='flex justify-center items-center gap-2 cursor-pointer'>
            <FaPhoneAlt />0342 14aug1947
          </p>
        </div>
        <div className="flex justify-center items-center gap-5 text-black">
          <select id="langauge" className='rounded-md'>
            <option selected>English</option>
            <option>Urdu</option>
            <option>Arabic</option>
          </select>
          <select name="" id="currency" className='rounded-md '>
            <option selected>USD</option>
            <option>PKR</option>
            <option>UAE</option>
          </select>
          <div id="wishlist" className='flex justify-center items-center gap-2 text-white'>
            <p className='font-bold font-mono'>wishlist</p>
            <CiHeart className='size-5 cursor-pointer' />
          </div>
        </div>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Pages" element={<Pages />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Contact" element={<Contact />} />
       
        
      </Routes>
    </>
  )
}

export default App


