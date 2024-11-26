import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Analytics } from '@vercel/analytics/react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import FlowerCatalog from "./pages/FlowerCatalog";
import ContactUs from "./pages/ContactUs";
import Blog from "./pages/Blog";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<FlowerCatalog />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      <Analytics />
      <Footer /> {/* Footer appears on all pages */}
    </Router>
  );
}

export default App;
