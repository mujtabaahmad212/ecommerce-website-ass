import { useState } from 'react';
import { FiHeart, FiShoppingCart, FiEye, FiCheck } from 'react-icons/fi';
import productImage from '../assets/images/pexels-madebymath-90946.jpg';
import { useCart } from '../context/CartContext';

const ProductList = () => {
  const { addToCart } = useCart();
  const [addedItems, setAddedItems] = useState({});

  const products = [
    { name: "Comfort Plus Chair", price: 129.99, category: "Furniture" },
    { name: "Modern Desk Lamp", price: 49.99, category: "Lighting" },
    { name: "Wireless Speaker", price: 89.99, category: "Electronics" },
    { name: "Leather Wallet", price: 39.99, category: "Accessories" },
    { name: "Smart Watch", price: 199.99, category: "Electronics" },
    { name: "Canvas Bag", price: 59.99, category: "Fashion" },
  ];

  const handleAddToCart = (product) => {
    addToCart({ name: product.name, price: product.price, image: productImage });
    setAddedItems(prev => ({ ...prev, [product.name]: true }));
    setTimeout(() => {
      setAddedItems(prev => ({ ...prev, [product.name]: false }));
    }, 2000);
  };

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {products.map((product, index) => (
        <div
          key={index}
          className="stagger-item card w-64 overflow-hidden group"
        >
          {/* Image */}
          <div className="relative overflow-hidden h-48">
            <img
              src={productImage}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />

            {/* Hover Icons */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4 gap-2">
              <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 hover:bg-green-500 hover:text-white transition-all hover-scale">
                <FiHeart />
              </button>
              <button
                onClick={() => handleAddToCart(product)}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all hover-scale ${addedItems[product.name]
                    ? 'bg-green-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-green-500 hover:text-white'
                  }`}
              >
                {addedItems[product.name] ? <FiCheck /> : <FiShoppingCart />}
              </button>
              <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 hover:bg-green-500 hover:text-white transition-all hover-scale">
                <FiEye />
              </button>
            </div>
          </div>

          {/* Info */}
          <div className="p-4 text-center">
            <p className="text-xs text-green-600 font-semibold uppercase tracking-wider mb-1">
              {product.category}
            </p>
            <h3 className="font-bold mb-2 group-hover:text-green-600 transition-colors">
              {product.name}
            </h3>
            <p className="text-xl font-bold gradient-text">${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;