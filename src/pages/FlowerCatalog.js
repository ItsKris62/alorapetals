import { useState } from "react";
import catalogPdf from '../assets/Catalogue__Version001_Optimized.pdf'; // Add the path to your PDF file

import roseImage from '../assets/images/1.jpg';
import tulipImage from '../assets/images/10.jpg';
import lilyImage from '../assets/images/11.jpg';
import orchidImage from '../assets/images/12.jpg';
import daisyImage from '../assets/images/13.jpg';

const FlowerCatalog = () => {
  const flowers = [
    {
        name: "Rose",
        price50cm: "$10",
        price80cm: "$15",
        image: roseImage, // Imported image for rose
      },
      {
        name: "Tulip",
        price50cm: "$8",
        price80cm: "$12",
        image: tulipImage, // Imported image for tulip
      },
      {
        name: "Lily",
        price50cm: "$12",
        price80cm: "$18",
        image: lilyImage, // Imported image for lily
      },
      {
        name: "Orchid",
        price50cm: "$20",
        price80cm: "$25",
        image: orchidImage, // Imported image for orchid
      },
      {
        name: "Daisy",
        price50cm: "$6",
        price80cm: "$9",
        image: daisyImage, // Imported image for daisy
      },
      {
        name: "Daisy",
        price50cm: "$6",
        price80cm: "$9",
        image: daisyImage, // Imported image for daisy
      },
      {
        name: "Daisy",
        price50cm: "$6",
        price80cm: "$9",
        image: daisyImage, // Imported image for daisy
      },
      {
        name: "Daisy",
        price50cm: "$6",
        price80cm: "$9",
        image: daisyImage, // Imported image for daisy
      },{
        name: "Daisy",
        price50cm: "$6",
        price80cm: "$9",
        image: daisyImage, // Imported image for daisy
      },
      {
        name: "Daisy",
        price50cm: "$6",
        price80cm: "$9",
        image: daisyImage, // Imported image for daisy
      },
      // Add more flowers as needed
  ];

  return (
    <section className="my-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Flower Catalog</h2>
      
      {/* Download button with bounce animation */}
      <div className="flex justify-center mb-6">
        <a href={catalogPdf} download="AloraPetals_Catalog.pdf">
          <button
            className="cursor-pointer bg-gray-800 px-3 py-2 rounded-md text-white tracking-wider shadow-xl animate-bounce hover:animate-none"
          >
            <svg
              className="w-5 h-5"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                strokeLinejoin="round"
                strokeLinecap="round"
              ></path>
            </svg>
          </button>
        </a>
      </div>

      {/* Flower Catalog Grid */}
      <div className="grid grid-cols-5 gap-6">
        {flowers.map((flower, index) => (
          <div
            key={index}
            className="relative overflow-hidden bg-white shadow-lg rounded-lg transition-transform transform hover:scale-110 duration-300"
          >
            <img
              src={flower.image}
              alt={flower.name}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-xl font-semibold mb-2">{flower.name}</h3>
              <p className="text-sm">
                50cm: {flower.price50cm} | 80cm: {flower.price80cm}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FlowerCatalog;
