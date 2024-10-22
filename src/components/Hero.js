import flowerVideo from "../assets/images/greenhouse.jpg";
import { Link } from "react-router-dom";

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
      {/* Content Centered */}
      <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black to-transparent flex flex-col justify-center items-center pb-10">
        {/* Text Above Button */}
        <h2 className="font-oswald text-white text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-4">
          Discover the beauty of our premium flowers
        </h2>
        {/* Call to Action */}
        <Link to="/catalog">
          {/* Use Link if using React Router */}
          <button className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">
            Explore Our Catalog
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
