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
import Footer from "./costumComponents/Footer.jsx";
import Wishlist from "./costumComponents/Wishlist.jsx"
// import Carousel from "./components/ui/carousel.tsx"
import { Button, buttonVariants } from "./components/ui/button";
// import Cursouel from "./costumComponents/Carsouel.jsx"

// Adjust the path based on your file structure


function App() {
  return (
    <>
      <div className="bg-purple-600 p-1 font-mono text-white">
  {/* Top Bar Container */}
  <div className="flex flex-col md:flex-row justify-between items-center gap-4">
    {/* Left Section: Contact Info */}
    <div className="flex flex-wrap justify-center md:justify-start items-center gap-5">
      <p className="flex justify-center items-center gap-2 cursor-pointer">
        <MdEmail />
        user@gmail.com
      </p>
      <p className="flex justify-center items-center gap-2 cursor-pointer">
        <FaPhoneAlt />
        0342 14aug1947
      </p>
    </div>

    {/* Right Section: Language, Currency, Wishlist */}
    <div className="flex flex-wrap justify-center md:justify-end items-center gap-5">
      {/* Language Selector */}
      <select
        id="language"
        className="rounded-md bg-purple-500 text-white px-2 py-1 focus:outline-none"
      >
        <option selected>English</option>
        <option>Urdu</option>
        <option>Arabic</option>
      </select>

      {/* Currency Selector */}
      <select
        id="currency"
        className="rounded-md bg-purple-500 text-white px-2 py-1 focus:outline-none"
      >
        <option selected>USD</option>
        <option>PKR</option>
        <option>UAE</option>
      </select>

      {/* Wishlist */}
      <div
        id="wishlist"
        className="flex justify-center items-center gap-2 text-white cursor-pointer"
      >
        <p className="font-bold font-mono">Wishlist</p>
        <CiHeart className="text-lg" />
      </div>
    </div>
  </div>
</div>
        <div className='flex flex-col min-h-screen'>
      {/* Navbar */}
      <Navbar />
<main className='flex-grow'> 
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Pages" element={<Pages />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Wishlist" element={<Wishlist />} />
       
        
      </Routes>
      </main>

      {/* footer */}
      <Footer />
      </div>

      {/* <Button variant="primary" size="lg" className='bg-black text-white'>
        Click Me
      </Button>

<Cursouel/> */}


    


      
    </>
  )
}

export default App


