import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/Alora_Petals.-removebg-preview.png"; // Update the path if needed

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu toggle

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
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
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/50 backdrop-blur-md"
          : "bg-white/30 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo and Company Name */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Alora Petals Logo" className="h-10 w-10" />
          <span className="font-playfair text-2xl font-bold text-gray-800">
            Alora Petals
          </span>
        </div>
        {/* Menu toggle button for mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-purple-600 focus:outline-none transition-all duration-300 ${
              isMenuOpen ? "bg-gray-200" : ""
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        {/* Menu */}
        <nav
          className={`md:flex md:items-center space-x-6 ${
            isMenuOpen ? "block" : "hidden md:block"
          }`}
        >
          <Link
            to="/"
            className="font-montserrat text-gray-600 hover:text-purple-600 transition-all duration-300"
            onClick={() => setIsMenuOpen(false)} // Close menu on link click
          >
            Home
          </Link>
          <Link
            to="/catalog"
            className="font-montserrat text-gray-600 hover:text-purple-600 transition-all duration-300"
            onClick={() => setIsMenuOpen(false)} // Close menu on link click
          >
            Catalog
          </Link>
          <Link
            to="/contact"
            className="font-montserrat text-gray-600 hover:text-purple-600 transition-all duration-300"
            onClick={() => setIsMenuOpen(false)} // Close menu on link click
          >
            Contact
          </Link>
          <Link
            to="/blog"
            className="font-montserrat text-gray-600 hover:text-purple-600 transition-all duration-300"
            onClick={() => setIsMenuOpen(false)} // Close menu on link click
          >
            Blog
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
