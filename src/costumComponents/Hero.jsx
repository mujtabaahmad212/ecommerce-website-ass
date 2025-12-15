import { FiCheck, FiShoppingCart } from "react-icons/fi";
import heroimage1 from "../assets/images/Home-Stylish-Club-Sofa-Chair-Pleated-Sofa-Armchair-with-Golden-Legs 1.png";
import herobgimg from "../assets/images/blob-haikei.png";

const Hero = () => {
  const features = [
    { color: "bg-green-400", text: "All frames constructed with hardwood solids and laminates" },
    { color: "bg-emerald-400", text: "Reinforced with double wood dowels, glue, screw - nails corner blocks" },
    { color: "bg-teal-400", text: "Arms, backs and seats are structurally reinforced" },
  ];

  return (
    <section className="py-20 px-4 gradient-bg-dark overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="section-title text-white animate-fadeInUp mb-16">
          Featured Collection
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="relative flex-1 animate-fadeInLeft">
            <div className="relative w-full max-w-lg mx-auto">
              <img
                src={herobgimg}
                alt="Background"
                className="w-full h-auto animate-float opacity-60"
              />
              <img
                src={heroimage1}
                alt="Premium Sofa"
                className="absolute inset-0 w-full h-full object-contain z-10 hover-scale"
                style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))' }}
              />
            </div>

            {/* Floating Elements */}
            <div className="absolute top-10 left-10 w-16 h-16 bg-green-500/30 rounded-full animate-float delay-300" />
            <div className="absolute bottom-10 right-10 w-24 h-24 bg-emerald-500/30 rounded-full animate-float delay-500" />
          </div>

          {/* Content Section */}
          <div className="flex-1 animate-fadeInRight">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Unique Features Of{' '}
              <span className="gradient-text">Latest & Trending</span>{' '}
              Products
            </h3>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="stagger-item flex items-start gap-4 group"
                >
                  <div className={`w-8 h-8 ${feature.color} rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <FiCheck className="text-white text-sm" />
                  </div>
                  <p className="text-gray-300 group-hover:text-white transition-colors">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <button className="btn-primary flex items-center gap-2 animate-pulse">
                <FiShoppingCart />
                Add To Cart
              </button>

              <div className="text-center sm:text-left">
                <p className="text-green-400 font-semibold">B&B Italian Sofa</p>
                <p className="text-2xl font-bold text-white">$32.00</p>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-white/10">
              <div className="text-center">
                <p className="text-3xl font-bold text-white">500+</p>
                <p className="text-gray-400 text-sm">Happy Customers</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-white">4.9</p>
                <p className="text-gray-400 text-sm">Average Rating</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-white">24/7</p>
                <p className="text-gray-400 text-sm">Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;