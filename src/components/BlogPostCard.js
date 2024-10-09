import React, { useRef } from 'react';

const BlogPostCard = ({ media, title, description, postedDate }) => {
  const videoRef = useRef(null);

  // Function to play the video when hovered
  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  // Function to pause the video when not hovered
  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div
      className="max-w-4xl flex flex-col md:flex-row rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 mb-6"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Left Side - Media */}
      <div className="md:w-1/2 w-full">
        {/* If it's an image */}
        {media && media.includes('.jpg') && (
          <img className="w-full h-48 md:h-full object-cover" src={media} alt={title} />
        )}
        {/* If it's a video */}
        {media && media.includes('.mp4') && (
          <video
            ref={videoRef}
            className="w-full h-48 md:h-full object-cover"
            muted
            loop
            preload="metadata" // preload video metadata for faster playback
          >
            <source src={media} type="video/mp4" />
          </video>
        )}
      </div>

      {/* Right Side - Text Content */}
      <div className="md:w-1/2 w-full p-6 flex flex-col justify-between">
        <div>
          <div className="font-bold text-2xl mb-2">{title}</div>
          <p className="text-gray-700 text-base mb-4">{description}</p>
        </div>
        
        {/* Posted Date */}
        <div className="text-gray-500 text-sm mt-auto">
          Posted on: {postedDate}
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;
