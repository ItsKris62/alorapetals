import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/Alora_Petals.-removebg-preview.png'; // Update the path if needed

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/50 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo and Company Name */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Alora Petals Logo" className="h-10 w-10" />
          <span className="font-playfair text-2xl font-bold text-gray-800">Alora Petals</span>
        </div>

        {/* Menu */}
        <nav className="space-x-6">
  <Link
    to="/"
    className="font-montserrat text-gray-600 hover:text-purple-600 transition-all duration-300"
  >
    Home
  </Link>
  <Link
    to="/catalog"
    className="font-montserrat text-gray-600 hover:text-purple-600 transition-all duration-300"
  >
    Catalog
  </Link>
  <Link
    to="/contact"
    className="font-montserrat text-gray-600 hover:text-purple-600 transition-all duration-300"
  >
    Contact
  </Link>
  <Link
    to="/blog"
    className="font-montserrat text-gray-600 hover:text-purple-600 transition-all duration-300"
  >
    Blog
  </Link>
</nav>
      </div>
    </header>
  );
};

export default Header;
