import { useState, useEffect } from "react";
import {
  FaWhatsapp,
  FaTiktok,
  FaInstagram,
  FaEnvelope,
  FaFacebook,
  FaPhoneAlt,
} from "react-icons/fa";

import kenyaImage from "../assets/images/flag-kenya.jpg";

const Footer = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer className="bg-[#FFFDD0] text-center py-8 px-4 relative">
      {/* Footer Content */}
      <div
        className={`transition-all ${
          isScrolled ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        } ease-out duration-500`}
      >
        {/* Navigation Links */}
        <div className="mb-6">
          <nav className="space-x-6 text-lg">
            <a
              href="/"
              className="text-gray-600 hover:text-blue-500 transition duration-300"
            >
              Home
            </a>
            <a
              href="/catalog"
              className="text-gray-600 hover:text-blue-500 transition duration-300"
            >
              Catalog
            </a>
            <a
              href="/contact-us"
              className="text-gray-600 hover:text-blue-500 transition duration-300"
            >
              Contact
            </a>
            <a
              href="/blog"
              className="text-gray-600 hover:text-blue-500 transition duration-300"
            >
              Blog
            </a>
          </nav>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://wa.me/c/254710272174"
            className="text-gray-600 hover:text-green-500 transition duration-300"
          >
            <FaWhatsapp size={24} />
          </a>
          <a
            href="https://tiktok.com/"
            className="text-gray-600 hover:text-black transition duration-300"
          >
            <FaTiktok size={24} />
          </a>
          <a
            href="https://www.instagram.com/alora_petals?igsh=MWNmMzQ5aWk2NHpodQ=="
            className="text-gray-600 hover:text-pink-500 transition duration-300"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="mailto:aloraroyalventures@gmail.com"
            className="text-gray-600 hover:text-red-500 transition duration-300"
          >
            <FaEnvelope size={24} />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61556671811040&mibextid=LQQJ4d"
            className="text-gray-600 hover:text-blue-500 transition duration-300"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="tel:+254710272174"
            className="text-gray-600 hover:text-blue-700 transition duration-300"
          >
            <FaPhoneAlt size={24} />
          </a>
        </div>

        {/* Copyright & Creator Notice */}
        <div className="text-gray-600 text-sm mb-2">
          &copy; {new Date().getFullYear()} Alora Petals. All Rights Reserved.
        </div>
        <div className="text-gray-600 text-sm font-homemade">
          This site was created by{" "}
          <span className="font-semibold">Veriwoks</span>.
        </div>
      </div>

      {/* Kenyan Flag and Abbreviation */}
      <div className="absolute bottom-4 right-4 flex items-center bg-white p-2 rounded shadow">
        <img
          src={kenyaImage} // Use the imported image
          alt="Kenyan Flag"
          className="h-8 w-12 mr-2 border-2 border-gray-300 rounded"
        />
        <span className="text-lg font-bold text-gray-700">KE</span>
      </div>
    </footer>
  );
};

export default Footer;
