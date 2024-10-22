import roseImage from '../assets/images/yellow_roses.jpg';
import tulipImage from '../assets/images/roses2.jpg';
import lilyImage from '../assets/images/whiteroses.jpg';
import orchidImage from '../assets/images/red_roses.jpg';
import daisyImage from '../assets/images/13.jpg';

const FeaturedFlowers = () => {
  const flowers = [
    {
      name: "Tarantella",
      description:
        "Versatile and charming variety of roses, known for their multiple small blooms per stem",
      image: roseImage,
    },
    {
      name: "Athena",
      description:
        "Versatile and charming variety of roses, known for their multiple small blooms per stem",
      image: tulipImage,
    },
    {
      name: "Adalonia",
      description:
        "Versatile and charming variety of roses, known for their multiple small blooms per stem",
      image: lilyImage,
    },
    {
      name: "Fuschiana",
      description:
        "Versatile and charming variety of roses, known for their multiple small blooms per stem",
      image: orchidImage,
    },
    {
      name: "Pink Spray Roses",
      description:
        "Versatile and charming variety of roses, known for their multiple small blooms per stem",
      image: daisyImage,
    },
  ];
  
  return (
    <section className="my-16">
      <h2 className="text-3xl font-bold text-center mb-10">Featured Flowers</h2>
      <div className="flex flex-wrap justify-center space-x-4 space-y-4">
        {flowers.map((flower, index) => (
          <div
            key={index}
            className="relative overflow-hidden bg-white shadow-lg rounded-lg transition-transform transform hover:scale-110 duration-300 w-60 h-80 mx-4 sm:w-48 sm:h-64 md:w-56 md:h-72 lg:w-64 lg:h-80"
          >
            <img
              src={flower.image}
              alt={flower.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-xl font-semibold mb-2">{flower.name}</h3>
              <p className="text-sm">{flower.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedFlowers;
