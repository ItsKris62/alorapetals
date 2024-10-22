import React, { useRef } from 'react';

const BlogPostCard = ({ media, title, description, postedDate, isHovered, onHover, onLeave }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (media.includes('.mp4')) {
      videoRef.current.play();
      onHover(); // Inform parent component that this card is hovered
    }
  };

  const handleMouseLeave = () => {
    if (media.includes('.mp4')) {
      videoRef.current.pause();
      onLeave(); // Inform parent component that hover has left
    }
  };

  return (
    <div
      className="relative rounded-lg overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Media (Image or Video) */}
      <div className="w-full h-64">
        {media && media.includes('.jpg') && (
          <img className="w-full h-full object-cover" src={media} alt={title} />
        )}
        {media && media.includes('.mp4') && (
          <video
            className="w-full h-full object-cover"
            ref={videoRef}
            muted
            loop
          >
            <source src={media} type="video/mp4" />
          </video>
        )}
      </div>

      {/* Blog Info (Title, Description, Date) */}
      <div className="absolute inset-x-0 bottom-0 bg-white/90 p-4">
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        <p className="text-gray-500 text-sm mt-4">Posted on: {postedDate}</p>
      </div>
    </div>
  );
};

export default BlogPostCard;
