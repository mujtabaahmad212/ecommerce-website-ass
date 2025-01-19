// import React, { useState } from 'react';
// import { CiSearch } from "react-icons/ci";
// import { Link } from "react-router-dom";
// import { RxHamburgerMenu } from "react-icons/rx";


// const navlinks = [
//   { title: "Home", url: "/" },
//   { title: "Pages", url: "/Pages" },
//   { title: "Product", url: "/Product" },
//   { title: "Blog", url: "/Blog" },
//   { title: "Shop", url: "/Shop" },
//   { title: "Contact", url: "/Contact" },
//   { title: "Cart", url: "/Cart" }, // Added Cart link

  
// ];

// const Navbar = () => {
  
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);

//   };




//   return (
//     <>

// <body className=' relative '>
    
//       <div className="flex justify-between items-center h-16 backdrop-blur-md absolutly top-0 z-50 bg-[#000000] font-bold text-[#FEF9E1] px-6   w-full">
//         <div className="flex justify-center items-center h-10">
//           <h1 className="text-2xl first-letter:text-3xl">N.Ahmad</h1>
//         </div>

//         <div className="flex justify-center items-center h-10">
//           <input type="search" className="rounded-tl-sm rounded-bl-sm" placeholder="Search..." />
//           <CiSearch className="size-5 h-6 cursor-pointer bg-[#000001] w-7 rounded-tr-sm rounded-br-sm" 
    
//           />
//         </div>
        
          
//           {/* Navigation */}
//           <nav id="navbar"  className={`flex-col md:flex-row md:flex ${isOpen ? 'flex ' : 'hidden'} :bg-red-600  `}>
            
//             {navlinks.map((item, index) => {
//               return (
//                 <a
//                   key={index}
//                   id="navitem"
//                   className="px-2 py-1 rounded-lg transition-all flex justify-center  items-center h-10  after:w-[0px] 
//                   after:rounded-lg after:hover:w-[50px] after:h-1 after:absolute  after:-bottom-[-10px]  after:bg-[#fafafa]  

//                   after:transition-all after:duration-300  "
//                 >
//                   <Link to={item.url}>{item.title}</Link>
//                 </a>
                
//               );
              
//             })}
//           </nav>
//           <div className="flex justify-center items-center gap-2 h-10">
//           {/* Hamburger Menu */}
//           <div className="md:hidden" onClick={toggleMenu}>
//             <RxHamburgerMenu className="text-3xl cursor-pointer" />
//           </div>
          
//         </div>
        
        
//       </div>
      
//       </body>
//     </>
//   );
// };


// export default Navbar;



// chatgpt code 




// import React, { useState } from "react";
// import { CiSearch } from "react-icons/ci";
// import { Link } from "react-router-dom";
// import { RxHamburgerMenu } from "react-icons/rx";

// const navlinks = [
//   { title: "Home", url: "/" },
//   { title: "Pages", url: "/Pages" },
//   { title: "Product", url: "/Product" },
//   { title: "Blog", url: "/Blog" },
//   { title: "Shop", url: "/Shop" },
//   { title: "Contact", url: "/Contact" },
//   { title: "Cart", url: "/Cart" }, // Added Cart link
// ];

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       <div className="relative">
//         <div className="flex justify-between items-center h-16 backdrop-blur-md  bg-[#000000] font-bold text-[#FEF9E1] px-6 w-full">
//           {/* Brand Name */}
//           <div className="flex justify-center items-center h-10">
//             <h1 className="text-2xl first-letter:text-3xl">N.Ahmad</h1>
//           </div>

//           {/* Search Box */}
//           <div className="hidden md:flex justify-center items-center h-10">
//             <input
//               type="search"
//               className="rounded-tl-sm rounded-bl-sm px-2 py-1 text-black"
//               placeholder="Search..."
//             />
//             <CiSearch className="size-5 h-6 cursor-pointer bg-[#000001] w-7 rounded-tr-sm rounded-br-sm" />
//           </div>

//           {/* Navigation */}
//           <nav
//             id="navbar"
//             className={`absolute md:static md:flex md:flex-row bg-[#000000] md:bg-transparent md:w-auto flex-col gap-4 md:gap-6 ${
//               isOpen ? "flex top-16 w-full left-0 p-4 z-40" : "hidden"
//             }`}
//           >
//             {navlinks.map((item, index) => (
//               <Link
//                 key={index}
//                 to={item.url}
//                 className="px-2 py-1 text-center md:text-left rounded-lg transition-all  hover:text-[#fafafa] md:after:content-[''] md:after:block md:after:h-1 md:after:bg-[#fafafa] md:after:scale-x-0 md:after:transition-transform md:after:duration-300 md:hover:after:scale-x-100"
//               >
//                 {item.title}
//               </Link>
//             ))}
//           </nav>

//           {/* Hamburger Menu */}
//           <div className="md:hidden" onClick={toggleMenu}>
//             <RxHamburgerMenu className="text-3xl cursor-pointer" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;

// gpt


import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";


const navlinks = [
  { title: "Home", url: "/" },
  
  { title: "Product", url: "/Product" },
 
  { title: "Shop", url: "/Shop" },
  { title: "Contact", url: "/Contact" },
  { title: "wishlist", url: "/wishlist" }, // Added Cart link
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <>
      <div className="relative">
        {/* Navbar */}
        <div className="flex justify-between items-center h-16 backdrop-blur-md bg-[#000000] font-bold text-[#FEF9E1] px-6 w-full">
          {/* Brand Name */}
          <div className="flex justify-center items-center h-10 flex-shrink-0">
            <h1 className="text-2xl first-letter:text-3xl">N.Ahmad</h1>
          </div>

          {/* Search Box */}
          <div className="flex justify-center items-center h-10 flex-grow max-w-md mx-4">
            <input
              type="search"
              className="w-full rounded-tl-sm rounded-bl-sm px-2 py-1 text-black"
              placeholder="Search..."
            />
            <CiSearch className="size-5 h-6 cursor-pointer bg-[#000001] w-7 rounded-tr-sm rounded-br-sm" />
          </div>

          {/* Full Navigation for Medium Screens and Larger */}
          <nav className="hidden md:flex gap-6 justify-end items-center flex-shrink-0">
            {navlinks.map((item, index) => (
              <Link
                key={index}
                to={item.url}
                className="px-2 py-1 text-[#ffffff] rounded-lg transition-all hover:text-[#fafafa] after:content-[''] after:block after:h-1 after:bg-[#fafafa] after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Hamburger Menu */}
          <div className="md:hidden" onClick={toggleMenu}>
            <RxHamburgerMenu className="text-3xl cursor-pointer" />
          </div>
        </div>

        {/* Navigation for Small Screens */}
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          } bg-[#000000] md:hidden`}
        >
          <nav className="flex flex-col gap-4 p-4">
            {navlinks.map((item, index) => (
              <Link
                key={index}
                to={item.url}
                className="px-2 py-2 text-center text-[#FEF9E1] bg-[#111111] hover:bg-[#222222] rounded-lg transition-all"
              >
                {item.title}
              </Link>
              
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
