import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import FlowerCatalog from './pages/FlowerCatalog';
import ContactUs from './pages/ContactUs';
import Blog from './pages/Blog';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<FlowerCatalog />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />  {/* Footer appears on all pages */}
    </Router>
  );
}

export default App;
