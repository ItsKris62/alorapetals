import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const openWhatsApp = () => {
    const phoneNumber = '+254710272174'; 
    const message = encodeURIComponent("Hello, I'd like to get in touch!");
    const url = `https://wa.me/254710272174${phoneNumber}?text=${message}`;
    window.open(url, '_blank');
  };

  return (
    <div>
      <button
        onClick={openWhatsApp}
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center"
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp className="text-2xl md:text-3xl" />
      </button>
    </div>
  );
};

export default WhatsAppButton;
