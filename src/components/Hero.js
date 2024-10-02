import flowerVideo from '../assets/videos/roses.mp4';

const Hero = () => {
    return (
      <section className="relative h-screen w-full">
        {/* Video Background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={flowerVideo}
          autoPlay
          loop
          muted
        ></video>
  
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent h-full"></div>
  
        {/* Call to Action */}
        <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black to-transparent flex justify-center items-center">
          <button className="bg-purple-600 text-white font-bold py-3 px-6 rounded-full hover:bg-pink-600 transition-all duration-300">
            Explore Our Catalog
          </button>
        </div>
      </section>
    );
  };
  
  export default Hero;
  