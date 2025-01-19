import React from "react";
import { FcBusinessContact } from "react-icons/fc";

const offercard = [
  {
    id: 1,
    title: "24/7",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, cum!",
  },
  {
    id: 2,
    title: "Free Shipping",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, cum!",
  },
  {
    id: 3,
    title: "Money Back",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, cum!",
  },
  {
    id: 4,
    title: "Secure Payment",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, cum!",
  },
];

const OfferCards1 = () => {
  return (
    <>
      {offercard.map((offer) => (
        <div key={offer.id} className="w-52 flex-col h-52 text-center px-4 bg-[#F2F3F4] rounded-3xl shadow-xl flex justify-center items-center">
          <FcBusinessContact className='w-12 h-12'/>
          <h1>{offer.title}</h1>
          <p>{offer.description}</p>
        </div>
      ))}
    </>
  );
};

export default OfferCards1;