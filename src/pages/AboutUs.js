// AboutUs.js
import React from 'react';
import companyImage from '../assets/images/company-building.jpg'; // Import the image

const AboutUs = () => {
  return (
    <section className="my-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">About Us</h2>
      <div className="flex justify-center items-center space-x-10">
        {/* Image Section */}
        <div className="w-1/2">
          <div className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:scale-105">
            <img
              src={companyImage}
              alt="Our Company"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Description Section */}
        <div className="w-1/2">
          <p className="text-lg text-gray-700 mb-4 transition-opacity duration-500 hover:opacity-80">
            At Alora Petals, we specialize in providing high-quality flowers for
            export worldwide. With a dedication to excellence, our carefully
            cultivated flowers ensure a captivating and vibrant display for any
            occasion.
          </p>
          <p className="text-lg text-gray-700 mb-6 transition-opacity duration-500 hover:opacity-80">
            Our commitment to sustainable farming and exceptional customer
            service has earned us a reputation as a trusted name in the flower
            export industry.
          </p>
          <a
            href="/about-us"
            className="inline-block bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-800 transition-all duration-300"
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
