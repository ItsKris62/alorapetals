import React, { useState } from "react";
import BlogPostCard from "../components/BlogPostCard";
import roseImage from "../assets/images/arrangement-with-market-full-flowers.jpg";
import farmVisitVideo from "../assets/videos/farm_visit.mp4";
import flowerArrangementsImage from "../assets/images/sprayroses.jpg";
import video2 from "../assets/videos/farm_visit.mp4";
import blogImage2 from "../assets/images/pexels-evie-shaffer-1259279-2512386.jpg";

const blogs = [
  {
    id: 1,
    media: roseImage,
    title: "Luxurious Flower Arrangements",
    description:
      "Explore our stunning, custom-designed flower arrangements, perfect for any occasion.",
    postedDate: "Oct 8, 2024",
  },
  {
    id: 2,
    media: farmVisitVideo,
    title: "Behind the Scenes: Farm Visit",
    description:
      "Join us on an exclusive behind-the-scenes farm visit and see how our flowers are grown.",
    postedDate: "Oct 6, 2024",
  },
  {
    id: 3,
    media: flowerArrangementsImage,
    title: "Perfect Pink Roses",
    description:
      "Discover the beauty of pink roses and how they can brighten up any event.",
    postedDate: "Oct 10, 2024",
  },
  {
    id: 4,
    media: video2,
    title: "Fresh Farm Harvest",
    description:
      "Watch how we harvest fresh flowers from our farm for your custom bouquets.",
    postedDate: "Oct 11, 2024",
  },
  {
    id: 5,
    media: blogImage2,
    title: "Seasonal Flower Specials",
    description:
      "Check out our seasonal specials and get inspired by our fresh flower collections.",
    postedDate: "Oct 12, 2024",
  },
];

const Blog = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleHover = (id) => setHoveredCard(id);
  const handleLeave = () => setHoveredCard(null);

  return (
    <div className="bg-gradient-to-b from-FFFDD0 to-white min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-5xl font-playfair text-center text-gray-900 mb-10">
          Our Blog
        </h1>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Feature Cards (First Two Blogs) */}
          <div className="md:col-span-6 lg:col-span-7 grid gap-8">
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
              </div>
            ))}
          </div>

          {/* Small Grid for Remaining Blogs */}
          <div className="md:col-span-6 lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6">
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
