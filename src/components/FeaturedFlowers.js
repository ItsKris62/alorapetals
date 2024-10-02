import roseImage from '../assets/images/white lilly.png';
import tulipImage from '../assets/images/red_tulips.jpg';
import lilyImage from '../assets/images/6.jpg';
import orchidImage from '../assets/images/hydrangea.webp';
import daisyImage from '../assets/images/gypsophilia.webp';

const FeaturedFlowers = () => {
    const flowers = [
        {
            name: "Rose",
            description: "A beautiful red rose known for its elegance and fragrance.",
            image: roseImage,
          },
          {
            name: "Tulip",
            description: "Bright and bold tulip flowers that bloom in the spring.",
            image: tulipImage,
          },
          {
            name: "Lily",
            description: "White lilies symbolizing purity and refined beauty.",
            image: lilyImage,
          },
          {
            name: "Orchid",
            description: "Exotic orchids with vibrant colors and intricate patterns.",
            image: orchidImage,
          },
          {
            name: "Daisy",
            description: "Classic white daisies representing innocence and simplicity.",
            image: daisyImage,
          },
    ];
  
    return (
      <section className="my-16">
        <h2 className="text-3xl font-bold text-center mb-10">Featured Flowers</h2>
        <div className="flex justify-center space-x-6">
          {flowers.map((flower, index) => (
            <div
              key={index}
              className="relative overflow-hidden bg-white shadow-lg rounded-lg transition-transform transform hover:scale-110 duration-300 w-60 h-80"
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
  