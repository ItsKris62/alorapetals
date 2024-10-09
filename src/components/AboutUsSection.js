import aboutUsImage from '../assets/images/flowers_production.jpg'; // Update the path based on your project structure

const AboutUsSection = () => {
  return (
    <section className="my-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">About Us</h2>
      <div className="flex justify-center items-center space-x-10">
        {/* Image Section */}
        <div className="w-1/2">
          <div className="relative overflow-hidden rounded-lg shadow-lg" style={{ height: '300px' }}> {/* Set custom height here */}
            <img
              src={aboutUsImage}
              alt="About Us"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Description Section */}
        <div className="w-1/2">
        <p className="text-lg text-gray-700 mb-4 transition-opacity duration-500 hover:opacity-80">
            Welcome to Alora Petals, a leading fresh cut flower export company dedicated to delivering premium quality blooms worldwide.
            With a strong presence in international flower markets, we specialize in exporting fresh flowers to the
            Middle East, Asia, Europe and Africa, ensuring that our clients receive fresh and vibrant flowers every time.
          </p>
          <p className="text-lg text-gray-700 mb-6 transition-opacity duration-500 hover:opacity-80">
            We partner with sustainable flower farms ensuring that every stem export is grown with care and meets the highest standards of 
            quality and freshness. Whether you need flowers for florists, wholesalers, retailers and even event planners, our diverse range of 
            fresh cut flowers ensures we meet your specific floral needs.

            At Alora Petals we pride ourselves on delivering exceptional customer service and timely shipments, thanks to our advanced cold chain 
            logistics and specialized packaging solutions.
          </p>
          <a
            href="/about-us"
            className="inline-block bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-800 transition-all duration-300"
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
