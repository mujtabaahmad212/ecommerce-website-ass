import { FiCheck, FiUsers, FiAward, FiTarget, FiHeart } from 'react-icons/fi';

const Pages = () => {
  const team = [
    { name: "Sarah Johnson", role: "CEO & Founder", image: "https://randomuser.me/api/portraits/women/44.jpg" },
    { name: "Mike Chen", role: "Lead Designer", image: "https://randomuser.me/api/portraits/men/32.jpg" },
    { name: "Emily Davis", role: "Marketing Head", image: "https://randomuser.me/api/portraits/women/68.jpg" },
    { name: "James Wilson", role: "Tech Lead", image: "https://randomuser.me/api/portraits/men/75.jpg" },
  ];

  const stats = [
    { value: "10K+", label: "Happy Customers" },
    { value: "500+", label: "Products" },
    { value: "50+", label: "Categories" },
    { value: "24/7", label: "Support" },
  ];

  const values = [
    { icon: <FiAward />, title: "Quality First", desc: "We never compromise on product quality" },
    { icon: <FiTarget />, title: "Customer Focus", desc: "Your satisfaction is our priority" },
    { icon: <FiHeart />, title: "Passion", desc: "We love what we do" },
    { icon: <FiUsers />, title: "Community", desc: "Building lasting relationships" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="page-header">
        <h1 className="gradient-text animate-fadeInUp">About Us</h1>
        <div className="breadcrumb animate-fadeInUp delay-200">
          <a href="/">Home</a>
          <span>/</span>
          <span>About Us</span>
        </div>
      </div>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="animate-fadeInLeft">
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-green-500 to-emerald-500 rounded-3xl" />
                <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gradient-to-br from-teal-500 to-cyan-400 rounded-3xl -z-10 animate-float" />
                <div className="absolute -top-8 -left-8 w-32 h-32 gradient-bg rounded-full animate-float delay-500" />
              </div>
            </div>

            {/* Content */}
            <div className="animate-fadeInRight">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                We're More Than Just a <span className="gradient-text">Store</span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded in 2020, N.Ahmad has grown from a small startup to one of the leading
                e-commerce platforms in the region. Our mission is to provide customers with
                high-quality products at the best prices.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We believe in building lasting relationships with our customers by consistently
                exceeding expectations and delivering value through every interaction.
              </p>

              {/* Features */}
              <div className="space-y-4">
                {['Premium Quality Products', 'Fast & Reliable Shipping', '24/7 Customer Support', 'Easy Returns Policy'].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 stagger-item">
                    <div className="w-6 h-6 gradient-bg rounded-full flex items-center justify-center">
                      <FiCheck className="text-white text-sm" />
                    </div>
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="stagger-item text-center"
              >
                <p className="text-5xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title gradient-text animate-fadeInUp">Our Values</h2>
          <p className="section-subtitle animate-fadeInUp delay-100">
            What drives us every day
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="stagger-item card p-8 text-center hover-lift"
              >
                <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="font-bold text-xl mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title gradient-text animate-fadeInUp">Meet Our Team</h2>
          <p className="section-subtitle animate-fadeInUp delay-100">
            The people behind N.Ahmad
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="stagger-item card overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-green-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 gradient-bg-dark">
        <div className="max-w-3xl mx-auto text-center animate-fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Shopping?
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Join thousands of happy customers and discover amazing products today!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/shop" className="btn-primary">
              Browse Products
            </a>
            <a href="/contact" className="btn-secondary text-white border-white hover:bg-white hover:text-green-600">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pages;