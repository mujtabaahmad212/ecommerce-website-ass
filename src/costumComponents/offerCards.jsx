import { FiTruck, FiDollarSign, FiHeadphones, FiShield } from 'react-icons/fi';

const OfferCards = () => {
  const offers = [
    {
      icon: <FiTruck />,
      title: "Free Delivery",
      description: "Free shipping on all orders over $50",
      color: "from-green-500 to-emerald-400",
    },
    {
      icon: <FiDollarSign />,
      title: "Best Prices",
      description: "Guaranteed lowest prices or money back",
      color: "from-teal-500 to-cyan-400",
    },
    {
      icon: <FiHeadphones />,
      title: "24/7 Support",
      description: "Customer support available anytime",
      color: "from-emerald-500 to-green-400",
    },
    {
      icon: <FiShield />,
      title: "Secure Payment",
      description: "100% secure payment processing",
      color: "from-lime-500 to-green-400",
    },
  ];

  return (
    <>
      {offers.map((offer, index) => (
        <div
          key={index}
          className={`stagger-item card p-8 text-center w-64 hover-lift bg-gradient-to-br ${offer.color} text-white`}
        >
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
            {offer.icon}
          </div>
          <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
          <p className="text-white/80">{offer.description}</p>
        </div>
      ))}
    </>
  );
};

export default OfferCards;