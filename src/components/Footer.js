import { useEffect, useState } from 'react';

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

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer className="bg-gray-900 text-gray-200 py-10 relative">
      {/* Footer Content */}
      <div className={`container mx-auto px-4 transition-all ${isScrolled ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} ease-out duration-500`}>
        <div className="flex justify-between items-center">
          <div className="text-lg font-medium">
            &copy; {new Date().getFullYear()} Alora Petals. All Rights Reserved.
          </div>
          <div className="space-x-6">
            <a href="#" className="text-gray-400 hover:text-blue-500 transition-all">
              Home
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500 transition-all">
              Catalog
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500 transition-all">
              Contact
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500 transition-all">
              Blog
            </a>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center mt-8 space-x-6">
          <a
            href="https://www.facebook.com"
            className="text-blue-600 hover:animate-bounce transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f fa-2x"></i>
          </a>
          <a
            href="https://www.whatsapp.com"
            className="text-green-500 hover:animate-bounce transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-whatsapp fa-2x"></i>
          </a>
          <a
            href="https://www.tiktok.com"
            className="text-black hover:animate-bounce transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-tiktok fa-2x"></i>
          </a>
          <a
            href="https://www.instagram.com"
            className="text-pink-500 hover:animate-bounce transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram fa-2x"></i>
          </a>
        </div>

        {/* Footer bottom message */}
        <div className="text-center mt-10 text-sm text-gray-400">
          This site was created by <a href="#" className="text-blue-500 hover:underline"> FootprintsCo. 2019</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
