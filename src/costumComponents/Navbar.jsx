import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";


const navlinks = [
  { title: "Home", url: "/" },
  { title: "Pages", url: "/Pages" },
  { title: "Product", url: "/Product" },
  { title: "Blog", url: "/Blog" },
  { title: "Shop", url: "/Shop" },
  { title: "Contact", url: "/Contact" },
  { title: "Cart", url: "/Cart" }, // Added Cart link

  
];

const Navbar = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);

  };




  return (
    <>

<body className=' relative '>
    
      <div className="flex justify-between items-center h-16 backdrop-blur-md absolutly top-0 z-50 bg-[#000000] font-bold text-[#FEF9E1] px-6   w-full">
        <div className="flex justify-center items-center h-10">
          <h1 className="text-2xl first-letter:text-3xl">N.Ahmad</h1>
        </div>

        <div className="flex justify-center items-center h-10">
          <input type="search" className="rounded-tl-sm rounded-bl-sm" placeholder="Search..." />
          <CiSearch className="size-5 h-6 cursor-pointer bg-[#000001] w-7 rounded-tr-sm rounded-br-sm" 
    
          />
        </div>
        
          
          {/* Navigation */}
          <nav id="navbar"  className={`flex-col md:flex-row md:flex ${isOpen ? 'flex ' : 'hidden'} justify-center py-2 h-16 items-center  `}>
            
            {navlinks.map((item, index) => {
              return (
                <a
                  key={index}
                  id="navitem"
                  className="px-2 py-1 rounded-lg transition-all flex justify-center  items-center h-10  after:w-[0px] 
                  after:rounded-lg after:hover:w-[50px] after:h-1 after:absolute  after:-bottom-[-10px]  after:bg-[#fafafa] 

                  after:transition-all after:duration-300  "
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
        
        
      </div>
      
      </body>
    </>
  );
};

export default Navbar;