
import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import 'bootstrap/dist/css/bootstrap.min.css';

const navlinks = [
  { title: "Home", url: "/" },
  { title: "Pages", url: "/Pages" },
  { title: "Product", url: "/Product" },
  { title: "Blog", url: "/Blog" },
  { title: "Shop", url: "/Shop" },
  { title: "Contact", url: "/Contact" },

  
];

const Navbar = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);

  };




  return (
    <>

<body className=' relative '>
    
      <div className="flex justify-between items-center h-16 backdrop-blur-md absolutly top-0 z-50 bg-[#2d1e17] font-bold text-[#eaddd3] px-6">
        <div className="flex justify-center items-center h-10">
          <h1 className="text-2xl first-letter:text-3xl">N.Ahmad</h1>
        </div>

        <div className="flex justify-center items-center h-10">
          <input type="search" className="rounded-tl-sm rounded-bl-sm" placeholder="Search..." />
          <CiSearch className="size-5 h-6 cursor-pointer bg-[#9d8a7c] w-7 rounded-tr-sm rounded-br-sm" 
    
          />
        </div>
        
          
          {/* Navigation */}
          <nav id="navbar"  className={`flex-col md:flex-row md:flex ${isOpen ? 'flex ' : 'hidden'} justify-center py-2 h-16 items-center `}>
            
            {navlinks.map((item, index) => {
              return (
                <a
                  key={index}
                  id="navitem"
                  className="px-2 py-1 rounded-lg transition-all flex justify-center  items-center h-10 hover:border-b-2 hover:border-[#6380bb]  hover:shadow-lg  "
                >
                  <Link to={item.url}>{item.title}</Link>
                </a>
                
              );
              
            })}
          </nav>
          <div className="flex justify-center items-center gap-2 h-10">
          {/* Hamburger Menu */}
          <div className="md:hidden" onClick={toggleMenu}>
            <RxHamburgerMenu className="text-3xl cursor-pointer" />
          </div>
          
        </div>
        
        
      </div></body>
    </>
  );
};

export default Navbar;