import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isAgreed, setIsAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Replace with your EmailJS credentials
    const serviceID = 'your_service_id';
    const templateID = 'your_template_id';
    const userID = 'your_user_id';

    emailjs.send(serviceID, templateID, formData, userID)
      .then((result) => {
        console.log('Email sent successfully!', result.text);
        alert('Your message has been sent!');
        setFormData({ name: '', email: '', message: '' }); // Reset form
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error('Error sending email:', error.text);
        alert('There was an issue sending your message. Please try again.');
        setIsSubmitting(false);
      });
  };

  const handleToggle = () => {
    setIsAgreed(!isAgreed);
  };

  return (
    <div className="contact-container flex justify-center items-center h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-6">
      <div className="contact-wrapper max-w-6xl w-full bg-white/30 backdrop-blur-lg rounded-lg shadow-xl p-8 md:p-12 flex flex-col md:flex-row">
        {/* Left Section - Get in Touch */}
        <div className="contact-info md:w-1/2 p-6 flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-white mb-4">
            We'd love to hear from you! Whether you have a question about our flowers, pricing, or anything else, feel free to get in touch with us. Our team is here to help you.
          </p>
          <p className="text-white mb-4">
            <strong>Email:</strong> aloraroyalventures@gmail.com
          </p>
          <p className="text-white mb-4">
            <strong>Phone:</strong> +254 710 272174
          </p>
          <p className="text-white">
            <strong>Address:</strong> JKIA Opp, Kuenhe Nagel
          </p>
          <p className="text-white">
            <strong>P.O Box:</strong> 15993 - 00100 GPO
          </p>
        </div>

        {/* Right Section - Contact Form */}
        <div className="contact-form md:w-1/2 p-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h2>
          <form className="space-y-4" onSubmit={handleSubmit} action="https://api.mailslurp.com/forms" method="post">
            <input type="hidden" name="_to" value="aloraroyalventures@gmail.com" />
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                placeholder="Your message"
                required
              ></textarea>
            </div>

            {/* Privacy Policy Toggle */}
            <div className="flex items-center mt-4">
              <input
                type="checkbox"
                id="privacy"
                checked={isAgreed}
                onChange={handleToggle}
                className="w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
              />
              <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
                By selecting this, you agree to our <a href="/privacy-policy" className="text-purple-600 hover:underline">privacy policy</a>.
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`w-full py-3 mt-6 rounded-lg text-white bg-purple-600 hover:bg-purple-800 transition-all duration-300 font-semibold ${
                !isAgreed && 'opacity-50 cursor-not-allowed'
              }`}
              disabled={!isAgreed || isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;