import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaWhatsapp, FaFacebook } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Big Title */}
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Got a Question for Us?</h2>
        
        {/* Small Title */}
        <p className="text-lg text-gray-500 mb-12">We'd like to talk more about what you need</p>

        {/* Contact Block */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center">
          {/* Address */}
          <div className="flex flex-col items-center">
            <FaMapMarkerAlt className="text-4xl text-purple-600 mb-4" />
            <p className="font-semibold text-lg">Our office</p>
            <p className="text-gray-500">JKIA Opp, Kuenhe Nagel, Nairobi</p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center">
            <FaEnvelope className="text-4xl text-purple-600 mb-4" />
            <p className="font-semibold text-lg">Send us an email</p>
            <p className="text-gray-500">aloraroyalventures@gmail.com</p>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center">
            <FaPhoneAlt className="text-4xl text-purple-600 mb-4" />
            <p className="font-semibold text-lg">Give us a ring</p>
            <p className="text-gray-500">+254 710 272174</p>
          </div>

          {/* WhatsApp */}
          <div className="flex flex-col items-center">
            <FaWhatsapp className="text-4xl text-purple-600 mb-4" />
            <p className="font-semibold text-lg">Send us a message</p>
            <p className="text-gray-500">+254 712 345678</p>
          </div>

          {/* Facebook */}
          <div className="flex flex-col items-center">
            <FaFacebook className="text-4xl text-purple-600 mb-4" />
            <p className="font-semibold text-lg">Send us a message</p>
            <p className="text-gray-500">Alora Petals</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
