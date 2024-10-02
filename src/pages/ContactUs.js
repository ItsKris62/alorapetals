// ContactUs.js
import React, { useState } from 'react';
import contactBackground from '../assets/images/pexels-anniroenkae-2382738.jpg'; // Import the background image

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    date: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    alert('Form submitted successfully!');
  };

  return (
    <section
      className="relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${contactBackground})` }} // Apply the background image
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex justify-center items-center h-full">
        <div className="bg-white bg-opacity-80 p-10 rounded-lg shadow-lg w-2/3">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div className="flex flex-col space-y-1">
              <label htmlFor="name" className="text-gray-700 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="border border-gray-300 p-3 rounded-md focus:outline-none focus:border-purple-600 transition-all"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email Field */}
            <div className="flex flex-col space-y-1">
              <label htmlFor="email" className="text-gray-700 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="border border-gray-300 p-3 rounded-md focus:outline-none focus:border-purple-600 transition-all"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Phone Field */}
            <div className="flex flex-col space-y-1">
              <label htmlFor="phone" className="text-gray-700 font-medium">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="border border-gray-300 p-3 rounded-md focus:outline-none focus:border-purple-600 transition-all"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            {/* Date Field */}
            <div className="flex flex-col space-y-1">
              <label htmlFor="date" className="text-gray-700 font-medium">
                Preferred Meeting Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                className="border border-gray-300 p-3 rounded-md focus:outline-none focus:border-purple-600 transition-all"
                value={formData.date}
                onChange={handleChange}
                required
                min={new Date().toISOString().split('T')[0]} // Restrict to future dates
              />
            </div>

            {/* Message Field */}
            <div className="flex flex-col space-y-1">
              <label htmlFor="message" className="text-gray-700 font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="border border-gray-300 p-3 rounded-md focus:outline-none focus:border-purple-600 transition-all"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-purple-600 text-white py-2 px-6 rounded-lg hover:bg-purple-800 transition-all duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
