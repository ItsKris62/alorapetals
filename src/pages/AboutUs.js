import React from "react";
// Import high-quality images
import teamImage from "../assets/images/pexels-lilartsy-2058499.jpg";
import missionImage from "../assets/images/row-fresh-green-plants-pot.jpg";
import visionImage from "../assets/images/Alora_Petals.-removebg-preview.png";

const AboutUsPage = () => {
  return (
    <div className="bg-gradient-to-b from-FFFDD0 to-white min-h-screen p-8">
      <div className="container mx-auto px-6 py-12">
        {/* Main Heading */}
        <h1 className="text-4xl font-playfair text-center mb-12">About Us</h1>

        {/* About Section */}
        <div className="grid lg:grid-cols-2 gap-10 mb-16 items-center">
          {/* Image on Left */}
          <img
            src={teamImage}
            alt="Our Team"
            className="rounded-lg shadow-lg object-cover w-full h-full"
          />

          {/* Text on Right */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-montserrat mb-4">Who We Are</h2>
            <p className="text-gray-700 text-lg mb-6 font-lato">
              Our organization is committed to bringing the freshest and most
              beautiful flowers to the global market. We believe in quality,
              dedication, and customer satisfaction. With years of experience,
              we are proud to be a leader in the flower export industry.
            </p>
          </div>
        </div>

        {/* Mission and Vision Section */}
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-16">
          {/* Mission Section */}
          <div className="flex flex-col items-center">
            <img
              src={missionImage}
              alt="Mission"
              className="rounded-lg shadow-lg object-cover mb-6 w-full h-full"
            />
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-700 text-lg text-center">
              Our mission is to source and deliver premium quality cut flowers
              while promoting sustainable practices, supporting local
              communities, and exceeding customer expectations.
            </p>
          </div>

          {/* Vision Section */}
          <div className="flex flex-col items-center">
            <img
              src={visionImage}
              alt="Vision"
              className="rounded-lg shadow-lg object-cover mb-6 w-full h-full"
            />
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-700 text-lg text-center">
              To be the world’s leading flower exporter, continuously innovating
              and improving the way flowers are cultivated, packaged, and
              delivered globally.
            </p>
          </div>
        </div>

        {/* Closing Section */}
        <div className="text-center mt-12">
          <h4 className="text-3xl font-bold mb-4">Join Us On This Journey</h4>
          <p className="text-gray-700 text-lg mb-8">
            We are passionate about flowers, and we want to share that passion
            with you. Discover the beauty and elegance that comes with every
            petal we grow and deliver.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
