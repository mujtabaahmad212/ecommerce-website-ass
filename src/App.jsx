import './App.css';
import Navbar from "./costumComponents/Navbar.jsx";
import Home from './costumComponents/Home.jsx';
import Pages from './costumComponents/Pages.jsx';
import Product from './costumComponents/Product.jsx';
import Blog from './costumComponents/Blog.jsx';
import Shop from './costumComponents/Shop.jsx';
import Contact from './costumComponents/Contact.jsx';
import Login from './costumComponents/Login.jsx';
import Cart from './costumComponents/Cart.jsx';
import { Routes, Route } from 'react-router-dom';
import Footer from "./costumComponents/Footer.jsx";
import ScrollToTop from "./costumComponents/ScrollToTop.jsx";

function App() {
  return (
    <>
      <div className='flex flex-col min-h-screen'>
        {/* Navbar */}
        <Navbar />

        <main className='flex-grow'>
          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Pages" element={<Pages />} />
            <Route path="/about" element={<Pages />} />
            <Route path="/Product" element={<Product />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Shop" element={<Shop />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>

      <ScrollToTop />
    </>
  );
}

export default App;
