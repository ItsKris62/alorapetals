import React from "react";
import { useInView } from "react-intersection-observer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import AboutUsSection from "../components/AboutUsSection";
import FeaturedFlowers from "../components/FeaturedFlowers";
import FAQs from "../components/FAQs";
import ContactSection from "../components/ContactSection";
import Services from "../components/Services";
import WhatsAppButton from '../components/WhatsAppButton';

const HomePage = () => {
  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: flowersRef, inView: flowersInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: faqsRef, inView: faqsInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <>
      <Header />
      <Hero />
      {/* About Us Section */}
      <div
        ref={aboutRef}
        className={`transition-opacity duration-50 ${
          aboutInView ? "opacity-100" : "opacity-0"
        }`}
      >
        <AboutUsSection />
      </div>
      {/* Services Section */}
      <Services />

      {/* Featured Flowers Section */}
      <div
        ref={flowersRef}
        className={`transition-opacity duration-50 ${
          flowersInView ? "opacity-100" : "opacity-0"
        }`}
      >
        <FeaturedFlowers />
      </div>

      {/* FAQs Section */}
      <div
        ref={faqsRef}
        className={`transition-opacity duration-50 ${
          faqsInView ? "opacity-100" : "opacity-0"
        }`}
      >
        <FAQs />
      </div>

      {/* Contact Section */}
      <ContactSection />

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </>
  );
};

export default HomePage;
