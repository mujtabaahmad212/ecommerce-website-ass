import React from "react";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

const navlinks = [
  { title: "Home", url: "/" },
  { title: "Pages", url: "/Pages" },
  { title: "Product", url: "/Product" },
  { title: "Blog", url: "/Blog" },
  { title: "Shop", url: "/Shop" },
  { title: "Contact", url: "/Contact" },

  // Add more links as needed
];

const Navbar = () => {
  return (
    <>
     
        <div className=" flex justify-between items-center h-16 backdrop-blur-md sticky bg-[#061934]  font-bold text-[#6380bb]">
          <div className="flex justify-center items-center h-10">
            <h1 className="text-2xl first-letter:text-red-600">N.Ahmad</h1>
          </div>
         
          <div className="flex justify-center items-center gap-2 h-10">
            
             {/* navigation */}
            <nav id="navbar" className="flex justify-center py-2  h-16  items-center">
              {navlinks.map((item, index) => {
                return (
                  <a
                    key={index}
                    id="navitem"
                    className="px-2 py-1 rounded-lg  transition-all 
                     flex justify-center items-center h-10 hover:border-b-2    hover:border-[#6380bb] transition-allhover:shadow-lg  "
                  >
                    <Link to={item.url}>{item.title}</Link>
                  </a>
                );
              })}
            </nav>
          </div>
          <div className="flex justify-center items-center  h-10">
            <input type="search" className="" />
            <CiSearch className="size-5  h-6 cursor-pointer" />
          </div>
        </div>
     
    </>
  );
};

export default Navbar;