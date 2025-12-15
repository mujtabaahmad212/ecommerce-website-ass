import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiMapPin, FiArrowRight } from 'react-icons/fi';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcApplePay } from 'react-icons/fa';

const Footer = () => {
  const quickLinks = [
    { name: "About Us", url: "/Pages" },
    { name: "Contact", url: "/contact" },
    { name: "Shop", url: "/shop" },
    { name: "Blog", url: "/blog" },
    { name: "FAQs", url: "/faqs" },
  ];

  const customerService = [
    { name: "My Account", url: "/account" },
    { name: "Order Tracking", url: "/tracking" },
    { name: "Wishlist", url: "/wishlist" },
    { name: "Returns", url: "/returns" },
    { name: "Shipping Info", url: "/shipping" },
  ];

  const categories = [
    { name: "Electronics", url: "/shop" },
    { name: "Fashion", url: "/shop" },
    { name: "Home & Garden", url: "/shop" },
    { name: "Sports", url: "/shop" },
    { name: "Accessories", url: "/shop" },
  ];

  return (
    <footer className="footer">
      <div className="max-w-7xl mx-auto px-4">
        {/* Newsletter Section */}
        <div className="gradient-bg rounded-3xl p-8 md:p-12 mb-12 -mt-24 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Subscribe to our Newsletter
              </h3>
              <p className="text-white/80">Get updates on new products and exclusive offers</p>
            </div>
            <div className="flex w-full md:w-auto gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-80 px-6 py-3 rounded-full focus:outline-none focus:ring-4 focus:ring-green-300"
              />
              <button className="bg-slate-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-slate-800 transition-all flex items-center gap-2">
                Subscribe <FiArrowRight />
              </button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 py-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="text-3xl font-bold gradient-text inline-block mb-6">
              N.Ahmad
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your one-stop destination for premium products at unbeatable prices.
              We're committed to delivering quality and exceptional customer service.
            </p>

            <div className="space-y-3 text-gray-400">
              <p className="flex items-center gap-3">
                <FiMapPin className="text-green-500" />
                123 Shopping Street, Karachi, Pakistan
              </p>
              <p className="flex items-center gap-3">
                <FiPhone className="text-green-500" />
                +92 342 1234567
              </p>
              <p className="flex items-center gap-3">
                <FiMail className="text-green-500" />
                support@nahmad.com
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.url} className="footer-link hover:pl-2 transition-all">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Customer Service</h4>
            <ul className="space-y-3">
              {customerService.map((link, index) => (
                <li key={index}>
                  <Link to={link.url} className="footer-link hover:pl-2 transition-all">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Categories</h4>
            <ul className="space-y-3">
              {categories.map((link, index) => (
                <li key={index}>
                  <Link to={link.url} className="footer-link hover:pl-2 transition-all">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-gray-400 text-center md:text-left">
              © 2024 N.Ahmad. All rights reserved.
            </p>

            <div className="flex items-center gap-4">
              {[
                { icon: <FaFacebook />, color: 'hover:text-blue-500' },
                { icon: <FaTwitter />, color: 'hover:text-sky-400' },
                { icon: <FaInstagram />, color: 'hover:text-pink-500' },
                { icon: <FaYoutube />, color: 'hover:text-red-500' },
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className={`text-gray-400 text-xl ${social.color} transition-colors hover-scale`}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4 text-3xl text-gray-400">
              <FaCcVisa className="hover:text-blue-600 transition-colors" />
              <FaCcMastercard className="hover:text-red-500 transition-colors" />
              <FaCcPaypal className="hover:text-blue-700 transition-colors" />
              <FaCcApplePay className="hover:text-white transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
