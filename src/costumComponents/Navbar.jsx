import { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { FiShoppingCart, FiHeart, FiUser } from "react-icons/fi";
import { useCart } from "../context/CartContext";

const navlinks = [
  { title: "Home", url: "/" },
  { title: "Shop", url: "/Shop" },
  { title: "Product", url: "/Product" },
  { title: "Blog", url: "/Blog" },
  { title: "About", url: "/Pages" },
  { title: "Contact", url: "/Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { cartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <>
      <nav className={`navbar animate-fadeInDown ${isScrolled ? 'scrolled' : ''}`}>
        {/* Top Bar */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-500 text-white py-2 px-4">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-sm">
            <div className="flex items-center gap-4">
              <span>📧 support@nahmad.com</span>
              <span className="hidden sm:inline">📞 +92 342 1234567</span>
            </div>
            <div className="flex items-center gap-4">
              <span>🚚 Free Shipping on Orders $50+</span>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold gradient-text hover-scale">
            N.Ahmad
          </Link>

          {/* Search Bar */}
          <div className="hidden lg:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="search"
                placeholder="Search products..."
                className="w-full px-5 py-2.5 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-green-400 focus:bg-white/20 transition-all"
              />
              <CiSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-white/70" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navlinks.map((item, index) => (
              <Link
                key={index}
                to={item.url}
                className={`nav-link ${location.pathname === item.url ? 'active' : ''}`}
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4 ml-4">
            <Link to="/wishlist" className="text-white hover:text-green-400 transition-colors hover-scale">
              <FiHeart className="text-xl" />
            </Link>
            <Link to="/cart" className="relative text-white hover:text-green-400 transition-colors hover-scale">
              <FiShoppingCart className="text-xl" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-green-500 text-white text-xs rounded-full flex items-center justify-center animate-scaleIn">
                  {cartCount}
                </span>
              )}
            </Link>
            <Link to="/login" className="hidden sm:block text-white hover:text-green-400 transition-colors hover-scale">
              <FiUser className="text-xl" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white text-2xl hover-scale"
            >
              {isOpen ? <IoMdClose /> : <RxHamburgerMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="lg:hidden px-4 pb-4">
          <div className="relative">
            <input
              type="search"
              placeholder="Search..."
              className="w-full px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-green-400"
            />
            <CiSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-white/70" />
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-overlay ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <div className="p-6 border-b border-white/10">
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold gradient-text">Menu</span>
            <button onClick={() => setIsOpen(false)} className="text-white text-2xl hover-scale">
              <IoMdClose />
            </button>
          </div>
        </div>

        <nav className="p-6 flex flex-col gap-2">
          {navlinks.map((item, index) => (
            <Link
              key={index}
              to={item.url}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-xl text-white text-lg transition-all ${location.pathname === item.url
                  ? 'gradient-bg'
                  : 'hover:bg-white/10'
                }`}
            >
              {item.title}
            </Link>
          ))}

          <div className="mt-6 pt-6 border-t border-white/10">
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-4 py-3 text-white hover:bg-white/10 rounded-xl transition-all"
            >
              <FiUser className="text-xl" />
              <span>Login / Register</span>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
