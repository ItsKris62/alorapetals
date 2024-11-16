import React from 'react';
import catalogPdf from '../assets/Catalogue__Version001_Optimized.pdf'; // Add the path to your PDF file

import veronicaImage from '../assets/images/1.jpg';
import staticeImage from '../assets/images/2.jpg';
import hypericumImage from '../assets/images/3.jpg';
import craspediaImage from '../assets/images/4.jpg';
import sunflowersImage from '../assets/images/5.jpg';
import chrysanthemumImage from '../assets/images/6.jpg';
import lilliesImage from '../assets/images/7.jpg';
import fernsImage from '../assets/images/8.jpg';
import ruscusImage from '../assets/images/9.jpg';
import limoniumImage from '../assets/images/10.jpg';
import caspiaImage from '../assets/images/11.jpg';
import gypsophilaImage from '../assets/images/12.jpg';
import sprayrosesImage from '../assets/images/13.jpg';
import rosesImage from '../assets/images/yellow_roses.jpg';

const FlowerCatalog = () => {
  const flowers = [
    { name: "Veronica", price50cm: "$10", price80cm: "$15", image: veronicaImage },
    { name: "Statice", price50cm: "$8", price80cm: "$12", image: staticeImage },
    { name: "Hypericum berries", price50cm: "$12", price80cm: "$18", image: hypericumImage },
    { name: "Craspedia", price50cm: "$20", price80cm: "$25", image: craspediaImage },
    { name: "Sunflowers", price50cm: "$6", price80cm: "$9", image: sunflowersImage },
    { name: "Chrysanthemum", price50cm: "$6", price80cm: "$9", image: chrysanthemumImage },
    { name: "Oriental lillies", price50cm: "$6", price80cm: "$9", image: lilliesImage },
    { name: "Leather ferns", price50cm: "$6", price80cm: "$9", image: fernsImage },
    { name: "Ruscus", price50cm: "$6", price80cm: "$9", image: ruscusImage },
    { name: "Limonium", price50cm: "$6", price80cm: "$9", image: limoniumImage },
    { name: "Caspia purple", price50cm: "$6", price80cm: "$9", image: caspiaImage },
    { name: "Gypsophila", price50cm: "$6", price80cm: "$9", image: gypsophilaImage },
    { name: "Spray roses", price50cm: "$6", price80cm: "$9", image: sprayrosesImage },
    { name: "Roses", price50cm: "$6", price80cm: "$9", image: rosesImage },
    // Add more flowers as needed
  ];

  return (
    <section className="my-16 px-4 lg:px-6">
      <h2 className="text-3xl font-playfair text-center mb-10">Flower Catalog</h2>
      
     {/* Download button with bounce animation and text */}
      <div className="flex justify-center items-center mb-6 space-x-3">
        <a href={catalogPdf} download="AloraPetals_Catalog.pdf">
          <button
            className="cursor-pointer bg-gray-800 px-3 py-2 rounded-md text-white tracking-wider shadow-xl animate-bounce hover:animate-none"
          >
            <svg
              className="w-5 h-5 inline-block"
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
        {/* Text next to the button */}
        <span className="font-montserrat text-lg font-medium text-gray-800">Download Catalog</span>
      </div>

      {/* Flower Catalog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {flowers.map((flower, index) => (
          <div
            key={index}
            className="relative overflow-hidden bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 duration-300"
          >
            <img
              src={flower.image}
              alt={flower.name}
              className="w-full h-48 md:h-56 lg:h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-lg font-semibold mb-2">{flower.name}</h3>
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