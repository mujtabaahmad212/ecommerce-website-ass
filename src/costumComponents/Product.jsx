import { useState } from 'react';
import { FiHeart, FiShoppingCart, FiShare2, FiMinus, FiPlus, FiCheck, FiTruck, FiShield, FiRefreshCw } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import productImage from '../assets/images/pexels-madebymath-90946.jpg';
import ProductCard from './ProductCard';

const Product = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('green');
  const [selectedSize, setSelectedSize] = useState('M');
  const [activeTab, setActiveTab] = useState('description');

  const images = [productImage, productImage, productImage, productImage];
  const colors = ['green', 'teal', 'emerald', 'cyan'];
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  const reviews = [
    { name: 'John Doe', rating: 5, comment: 'Excellent product! Highly recommended.', date: '2 days ago' },
    { name: 'Jane Smith', rating: 4, comment: 'Good quality, fast shipping.', date: '1 week ago' },
    { name: 'Mike Johnson', rating: 5, comment: 'Love it! Will buy again.', date: '2 weeks ago' },
  ];

  const relatedProducts = [
    { name: "Wireless Headphones", price: 79.99, oldPrice: 99.99, badge: "Sale" },
    { name: "Smart Watch Pro", price: 199.99, badge: "New" },
    { name: "Leather Backpack", price: 149.99 },
    { name: "Running Shoes", price: 129.99 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="page-header">
        <h1 className="gradient-text animate-fadeInUp">Product Details</h1>
        <div className="breadcrumb animate-fadeInUp delay-200">
          <a href="/">Home</a>
          <span>/</span>
          <a href="/shop">Shop</a>
          <span>/</span>
          <span>Product</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Product Details */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Product Images */}
          <div className="animate-fadeInLeft">
            <div className="card overflow-hidden mb-4">
              <img
                src={images[selectedImage]}
                alt="Product"
                className="w-full h-[500px] object-cover hover-scale"
              />
            </div>

            <div className="flex gap-4">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-24 h-24 rounded-xl overflow-hidden transition-all ${selectedImage === index
                      ? 'ring-4 ring-green-500'
                      : 'ring-2 ring-gray-200 hover:ring-green-300'
                    }`}
                >
                  <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="animate-fadeInRight">
            <span className="badge badge-new mb-4">New Arrival</span>

            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Premium Wireless Headphones
            </h1>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <span className="text-gray-500">(4.9) • 256 Reviews</span>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl font-bold gradient-text">$199.99</span>
              <span className="text-2xl text-gray-400 line-through">$299.99</span>
              <span className="badge badge-sale">33% OFF</span>
            </div>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Experience premium sound quality with our latest wireless headphones.
              Features active noise cancellation, 40-hour battery life, and comfortable
              over-ear design perfect for long listening sessions.
            </p>

            {/* Color Selection */}
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Color: <span className="text-green-600 capitalize">{selectedColor}</span></h4>
              <div className="flex gap-3">
                {colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-10 h-10 rounded-full transition-all bg-${color}-500 ${selectedColor === color ? 'ring-4 ring-offset-2 ring-green-500' : ''
                      }`}
                    style={{ backgroundColor: color === 'green' ? '#22c55e' : color === 'teal' ? '#14b8a6' : color === 'emerald' ? '#10b981' : '#06b6d4' }}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-8">
              <h4 className="font-semibold mb-3">Size:</h4>
              <div className="flex gap-3">
                {sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 rounded-xl font-semibold transition-all ${selectedSize === size
                        ? 'gradient-bg text-white'
                        : 'bg-white border-2 border-gray-200 hover:border-green-500'
                      }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-6 mb-8">
              <h4 className="font-semibold">Quantity:</h4>
              <div className="flex items-center border-2 border-gray-200 rounded-xl">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-gray-100 transition-colors"
                >
                  <FiMinus />
                </button>
                <span className="px-6 font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-gray-100 transition-colors"
                >
                  <FiPlus />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <button className="btn-primary flex-1 flex items-center justify-center gap-2">
                <FiShoppingCart /> Add to Cart
              </button>
              <button className="w-14 h-14 rounded-xl border-2 border-gray-200 flex items-center justify-center hover:border-green-500 hover:text-green-500 transition-all">
                <FiHeart className="text-xl" />
              </button>
              <button className="w-14 h-14 rounded-xl border-2 border-gray-200 flex items-center justify-center hover:border-green-500 hover:text-green-500 transition-all">
                <FiShare2 className="text-xl" />
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 p-6 bg-gray-100 rounded-2xl">
              <div className="text-center">
                <FiTruck className="text-2xl text-green-500 mx-auto mb-2" />
                <p className="text-sm font-semibold">Free Shipping</p>
              </div>
              <div className="text-center">
                <FiShield className="text-2xl text-green-500 mx-auto mb-2" />
                <p className="text-sm font-semibold">2 Year Warranty</p>
              </div>
              <div className="text-center">
                <FiRefreshCw className="text-2xl text-green-500 mx-auto mb-2" />
                <p className="text-sm font-semibold">Easy Returns</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="card mb-20 animate-fadeInUp">
          <div className="flex border-b">
            {['description', 'reviews', 'shipping'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-4 font-semibold capitalize transition-all ${activeTab === tab
                    ? 'border-b-2 border-green-500 text-green-600'
                    : 'text-gray-500 hover:text-gray-700'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="p-8">
            {activeTab === 'description' && (
              <div className="space-y-4 text-gray-600">
                <p>Our Premium Wireless Headphones deliver exceptional audio quality with deep bass and crystal-clear highs.</p>
                <h4 className="font-semibold text-gray-900 mt-6">Key Features:</h4>
                <ul className="space-y-2">
                  {['Active Noise Cancellation', '40-hour battery life', 'Premium memory foam ear cushions', 'Bluetooth 5.0 connectivity', 'Built-in microphone for calls'].map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <FiCheck className="text-green-500" /> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6">
                {reviews.map((review, index) => (
                  <div key={index} className="border-b pb-6 last:border-0">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center text-white font-bold">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-semibold">{review.name}</h4>
                        <div className="flex items-center gap-2">
                          <div className="flex">
                            {[...Array(review.rating)].map((_, i) => (
                              <FaStar key={i} className="text-yellow-400 text-sm" />
                            ))}
                          </div>
                          <span className="text-gray-400 text-sm">{review.date}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 ml-16">{review.comment}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'shipping' && (
              <div className="space-y-4 text-gray-600">
                <p><strong>Free Standard Shipping:</strong> 5-7 business days</p>
                <p><strong>Express Shipping:</strong> 2-3 business days ($9.99)</p>
                <p><strong>Next Day Delivery:</strong> Order before 2 PM ($19.99)</p>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <section>
          <h2 className="section-title gradient-text animate-fadeInUp">Related Products</h2>
          <p className="section-subtitle animate-fadeInUp delay-100">You might also like</p>
          <div className="flex flex-wrap justify-center gap-6">
            {relatedProducts.map((product, index) => (
              <ProductCard key={index} delay={index * 0.1} {...product} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Product;