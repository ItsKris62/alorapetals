import React from 'react';
import BlogPostCard from '../components/BlogPostCard';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Import your media assets
import roseImage from '../assets/images/row-fresh-green-plants-pot.jpg';
import farm_visitVideo from '../assets/videos/farm_visit.mp4';
import flowerArrangementsImage from '../assets/images/pink roses.jpg';
import seasonalFlowersImage from '../assets/images/pexels-thngocbich-945453.jpg';

const BlogPage = () => {
  const blogPosts = [
    {
      title: 'The Beauty of Roses',
      description: 'Discover the different varieties of roses and their meanings.',
      media: roseImage, // Use the imported image
    },
    {
      title: 'How to Care for Orchids',
      description: 'A guide to keeping your orchids healthy and blooming.',
      media: farm_visitVideo, // Use the imported video
    },
    {
      title: 'Flower Arrangements for Weddings',
      description: 'Tips on creating the perfect floral arrangements for weddings.',
      media: flowerArrangementsImage, // Use the imported image
    },
    {
      title: 'Seasonal Flower Trends',
      description: 'A look at the most popular flowers for each season.',
      media: seasonalFlowersImage, // Use the imported image
    },
  ];

  return (
    <>
      <Header />
      <section className="py-16 px-4 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Our Blog</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogPostCard
                key={index}
                title={post.title}
                description={post.description}
                media={post.media}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
