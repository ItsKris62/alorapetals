import React, { useState } from 'react';
import BlogPostCard from '../components/BlogPostCard';

// Import your media assets
import roseImage from '../assets/images/arrangement-with-market-full-flowers.jpg';
import farm_visitVideo from '../assets/videos/farm_visit.mp4';
import flowerArrangementsImage from '../assets/images/sprayroses.jpg';
import seasonalFlowersImage from '../assets/images/row-fresh-green-plants-pot.jpg';
import video2 from '../assets/videos/farm_visit.mp4';
import blogImage2 from '../assets/images/pexels-evie-shaffer-1259279-2512386.jpg';

const blogs = [
  {
    id: 1,
    media: roseImage,
    title: 'Luxurious Flower Arrangements',
    description: 'Explore our stunning, custom-designed flower arrangements, perfect for any occasion.',
    postedDate: 'Oct 8, 2024',
  },
  {
    id: 2,
    media: farm_visitVideo,
    title: 'Behind the Scenes: Farm Visit',
    description: 'Join us on an exclusive behind-the-scenes farm visit and see how our flowers are grown.',
    postedDate: 'Oct 6, 2024',
  },
  {
    id: 3,
    media: flowerArrangementsImage,
    title: 'Perfect Pink Roses',
    description: 'Discover the beauty of pink roses and how they can brighten up any event.',
    postedDate: 'Oct 10, 2024',
  },
  {
    id: 4,
    media: video2,
    title: 'Fresh Farm Harvest',
    description: 'Watch how we harvest fresh flowers from our farm for your custom bouquets.',
    postedDate: 'Oct 11, 2024',
  },
  {
    id: 5,
    media: blogImage2,
    title: 'Seasonal Flower Specials',
    description: 'Check out our seasonal specials and get inspired by our fresh flower collections.',
    postedDate: 'Oct 12, 2024',
  },
  // Add more blogs as needed
];

const Blog = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleHover = (id) => setHoveredCard(id);
  const handleLeave = () => setHoveredCard(null);

  return (
    <div className="bg-gradient-to-b from-FFFDD0 to-white min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-10">Our Blog</h1>

        {/* Showcase Section with Two Large Feature Cards */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          {blogs.slice(0, 2).map((blog) => (
            <div key={blog.id} className="relative group">
              <BlogPostCard
                media={blog.media}
                title={blog.title}
                description={blog.description}
                postedDate={blog.postedDate}
                isHovered={hoveredCard === blog.id}
                onHover={() => handleHover(blog.id)}
                onLeave={handleLeave}
              />
              {/* Hover overlay effect */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500"></div>
            </div>
          ))}
        </div>

        {/* Recent Blogs Section */}
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Recent Blogs</h2>

        {/* Blog Cards in Three Columns */}
        <div className="grid md:grid-cols-3 gap-8">
          {blogs.slice(2).map((blog) => (
            <div key={blog.id} className="relative group">
              <BlogPostCard
                media={blog.media}
                title={blog.title}
                description={blog.description}
                postedDate={blog.postedDate}
                isHovered={hoveredCard === blog.id}
                onHover={() => handleHover(blog.id)}
                onLeave={handleLeave}
              />
              {/* Hover overlay effect */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
