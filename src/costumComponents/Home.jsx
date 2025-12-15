import ProductCard from "./ProductCard";
import ProductList from './imageCard';
import Trendingproducts from './Trendingproducts';
import Hero from './Hero';
import OfferCards1 from "./offerCards";
import heroimage from "../assets/images/andrew-kliatskyi-2bfHAKhGn4g-unsplash.jpg";
import { FiTruck, FiShield, FiHeadphones, FiRefreshCw } from "react-icons/fi";

const Home = () => {
  const features = [
    { icon: <FiTruck />, title: "Free Shipping", desc: "On orders over $50" },
    { icon: <FiShield />, title: "Secure Payment", desc: "100% protected" },
    { icon: <FiHeadphones />, title: "24/7 Support", desc: "Always here for you" },
    { icon: <FiRefreshCw />, title: "Easy Returns", desc: "30 days policy" },
  ];

  const categories = [
    { name: "Electronics", count: 120, color: "bg-green-100 border-green-300" },
    { name: "Fashion", count: 89, color: "bg-teal-100 border-teal-300" },
    { name: "Home & Garden", count: 56, color: "bg-emerald-100 border-emerald-300" },
    { name: "Sports", count: 43, color: "bg-lime-100 border-lime-300" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner */}
      <section
        className="hero relative animate-fadeIn"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(34, 197, 94, 0.85), rgba(16, 185, 129, 0.75)), url(${heroimage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="hero-content px-4">
          <h1 className="hero-title animate-fadeInUp">
            Welcome to N.Ahmad Store
          </h1>
          <p className="hero-subtitle animate-fadeInUp delay-200">
            Discover Amazing Products at Unbeatable Prices
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-8 animate-fadeInUp delay-400">
            <button className="btn-primary">
              Shop Now
            </button>
            <button className="btn-secondary text-white border-white hover:bg-white hover:text-green-600">
              View Collection
            </button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-float" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/10 rounded-full animate-float delay-500" />
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="stagger-item flex items-center gap-4 p-6 rounded-2xl hover:shadow-lg transition-all hover-lift"
              >
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center text-white text-2xl">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                  <p className="text-gray-500 text-sm">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section - BLACK TEXT */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-gray-900 animate-fadeInUp">
            Shop by Category
          </h2>
          <p className="section-subtitle animate-fadeInUp delay-100">
            Find what you're looking for
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((cat, index) => (
              <div
                key={index}
                className={`stagger-item card p-8 text-center cursor-pointer hover-lift ${cat.color} border-2`}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{cat.name}</h3>
                <p className="text-gray-600">{cat.count} Products</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title gradient-text animate-fadeInUp">
            Featured Products
          </h2>
          <p className="section-subtitle animate-fadeInUp delay-100">
            Handpicked just for you
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <ProductCard delay={0.1} name="Wireless Headphones" price={79.99} oldPrice={99.99} badge="Sale" />
            <ProductCard delay={0.2} name="Smart Watch Pro" price={199.99} badge="New" />
            <ProductCard delay={0.3} name="Leather Backpack" price={149.99} oldPrice={189.99} />
            <ProductCard delay={0.4} name="Running Shoes" price={129.99} />
          </div>

          <div className="text-center mt-10 animate-fadeInUp delay-500">
            <button className="btn-secondary">
              View All Products
            </button>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="stagger-item card gradient-bg p-10 text-white hover-lift">
              <span className="badge badge-sale mb-4">50% OFF</span>
              <h3 className="text-3xl font-bold mb-2">Summer Sale</h3>
              <p className="mb-6 opacity-90">Get amazing deals on summer collection</p>
              <button className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all">
                Shop Now
              </button>
            </div>
            <div className="stagger-item card bg-slate-800 p-10 text-white hover-lift">
              <span className="badge badge-new mb-4">New Arrivals</span>
              <h3 className="text-3xl font-bold mb-2">Latest Collection</h3>
              <p className="mb-6 opacity-90">Discover the newest trends</p>
              <button className="bg-white text-slate-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all">
                Explore
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Products */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title gradient-text animate-fadeInUp">
            Latest Products
          </h2>
          <p className="section-subtitle animate-fadeInUp delay-100">
            Fresh arrivals this week
          </p>
          <ProductList />
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 px-4 gradient-bg-dark">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-white animate-fadeInUp">
            What Shopex Offers!
          </h2>
          <p className="section-subtitle text-white/70 animate-fadeInUp delay-100">
            Premium services for our customers
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <OfferCards1 />
          </div>
        </div>
      </section>

      {/* Hero Feature Section */}
      <Hero />

      {/* Trending Products */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title gradient-text animate-fadeInUp">
            Trending Products
          </h2>
          <p className="section-subtitle animate-fadeInUp delay-100">
            Most popular this month
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Trendingproducts />
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 gradient-bg">
        <div className="max-w-3xl mx-auto text-center animate-fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-white/80 mb-8">
            Get updates on new products and exclusive offers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="form-input max-w-md"
            />
            <button className="bg-slate-900 text-white px-8 py-3 rounded-xl font-semibold hover:bg-slate-800 transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
