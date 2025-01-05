import React from 'react'
import './App.css'
import { CiHeart } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Navbar from "./components/Navbar.jsx";
import Home from './components/Home';
import About from './components/About';
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
        <Route path="/about" element={<About />} />
        
      </Routes>
    </>
  )
}

export default App


