import React from "react";
import { useInView } from "react-intersection-observer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import AboutUsSection from "../components/AboutUsSection";
import FeaturedFlowers from "../components/FeaturedFlowers";


const HomePage = () => {
  const { ref: aboutRef, inView: aboutInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: flowersRef, inView: flowersInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  
  return (
    <>
      <Header />
      <Hero />
      {/* About Us Section */}
      <div ref={aboutRef} className={`transition-opacity duration-1000 ${aboutInView ? "opacity-100" : "opacity-0"}`}>
        <AboutUsSection />
      </div>
      
      {/* Featured Flowers Section */}
      <div ref={flowersRef} className={`transition-opacity duration-1000 ${flowersInView ? "opacity-100" : "opacity-0"}`}>
        <FeaturedFlowers />
      </div>

    </>
  );
};

export default HomePage;
