import React from "react";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

const navlinks = [
  { title: "Home", url: "/" },
  { title: "About", url: "/about" },
  { title: "About", url: "/about" },
  { title: "About", url: "/about" },
  { title: "About", url: "/about" },
  { title: "About", url: "/about" },

  // Add more links as needed
];

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="border flex justify-between items-center h-16 backdrop-blur-md sticky">
          <div className="flex justify-center items-center h-10">
            <h1>N.Ahmad</h1>
          </div>
          {/* navigation */}
          <div className="flex justify-center items-center gap-2 h-10">
            <nav id="navbar" className="flex justify-center py-2 bg-blue-400">
              {navlinks.map((item, index) => {
                return (
                  <a
                    key={index}
                    id="navitem"
                    className="px-2 py-1 rounded-lg hover:bg-blue-600 hover:shadow-lg"
                  >
                    <Link to={item.url}>{item.title}</Link>
                  </a>
                );
              })}
            </nav>
          </div>
          <div className="flex justify-center items-center border h-10">
            <input type="search" className="" />
            <CiSearch className="size-5  h-6 cursor-pointer" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;