import React, { useState } from "react";
import {
  FaSeedling,
  FaBoxOpen,
  FaShippingFast,
  FaSnowflake,
} from "react-icons/fa";
import ContactOverlay from "./ContactOverlay"; // Import the ContactOverlay component

const Services = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const services = [
    {
      title: "Flower Sourcing",
      description:
        "We find and provide top-quality fresh flowers from trusted growers.",
      icon: <FaSeedling className="text-purple-500 text-5xl mx-auto" />,
    },
    {
      title: "Consolidation",
      description:
        "We bring together your flower orders in one place, so you get everything in a single shipment.",
      icon: <FaBoxOpen className="text-purple-500 text-5xl mx-auto" />,
    },
    {
      title: "Shipping",
      description:
        "We handle the shipping process, ensuring your flowers reach you on time.",
      icon: <FaShippingFast className="text-purple-500 text-5xl mx-auto" />,
    },
    {
      title: "Cold Chain Storage",
      description:
        "We keep flowers in the ideal temperature during storage and transit, so they stay fresh for longer.",
      icon: <FaSnowflake className="text-purple-500 text-5xl mx-auto" />,
    },
  ];

  return (
    <div className="services-page bg-gray-50 min-h-screen py-16">
      {/* Hero Section */}
      <div className="hero bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center py-20">
        <h1 className="text-5xl font-playfair">Our Services</h1>
        <p className="text-lg font-bold mt-4">
          Everything you need for fresh flowers delivered right to you.
        </p>
        <button
          className="mt-8 px-6 py-3 bg-white text-purple-600 hover:bg-gray-200 rounded-full font-semibold shadow-lg transition-all duration-300"
          onClick={() => setIsOverlayVisible(true)}
        >
          Contact Us
        </button>
      </div>

      {/* Services Section */}
      <section className="services container mx-auto px-6 py-16">
        <h2 className="text-3xl font-playfair text-center mb-10 text-gray-800">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="icon mb-4">{service.icon}</div>
              <h3 className="text-xl font-lato text-center text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center mt-4">
                {service.description}
              </p>
              <button
                className="mt-6 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-all duration-300"
                onClick={() => setIsOverlayVisible(true)}
              >
                Contact Us
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta bg-purple-100 py-10 text-center">
        <h2 className="text-2xl font-playfair text-gray-800">
          Let’s Work Together!
        </h2>
        <p className="text-gray-700 mt-2">
          Contact us today to get started on your next floral project.
        </p>
        <button
          className="mt-6 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-semibold shadow-lg transition-all duration-300"
          onClick={() => setIsOverlayVisible(true)}
        >
          Get in Touch
        </button>
      </section>

      {/* Contact Overlay */}
      {isOverlayVisible && (
        <ContactOverlay setIsOverlayVisible={setIsOverlayVisible} />
      )}
    </div>
  );
};

export default Services;
