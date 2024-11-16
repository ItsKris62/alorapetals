import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isAgreed, setIsAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_EMAILJS_USER_ID
      );
      alert("Your message has been sent!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      alert("There was an issue sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleToggle = () => {
    setIsAgreed(!isAgreed);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-6">
      <div className="w-full max-w-5xl bg-white/30 backdrop-blur-lg rounded-lg shadow-lg p-6 md:p-12 grid gap-6 md:grid-cols-2">
        {/* Contact Information */}
        <div className="space-y-4">
          <h2 className="text-4xl font-playfair text-white">Get in Touch</h2>
          <p className="text-white font-montserrat">
            We'd love to hear from you! Whether you have a question about our
            services, pricing, or anything else, feel free to get in touch.
          </p>
          <div className="text-white">
            <p>
              <strong>Email:</strong> aloraroyalventures@gmail.com
            </p>
            <p>
              <strong>Phone:</strong> +254 710 272174
            </p>
            <p>
              <strong>Address:</strong> JKIA Opp, Kuenhe Nagel
            </p>
            <p>
              <strong>P.O Box:</strong> 15993 - 00100 GPO
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-3xl font-playfair text-gray-800 mb-6">
            Contact Us
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-montserrat text-gray-700"
              >
                Name
              </label>
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
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
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
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
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
            <div className="flex items-center">
              <input
                type="checkbox"
                id="privacy"
                checked={isAgreed}
                onChange={handleToggle}
                className="w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
              />
              <label htmlFor="privacy" className="ml-2 text-sm text-gray-700">
                I agree to the{" "}
                <a
                  href="/privacy-policy"
                  className="text-purple-600 hover:underline"
                >
                  privacy policy
                </a>
                .
              </label>
            </div>
            <button
              type="submit"
              className={`w-full py-3 rounded-lg text-white bg-purple-600 hover:bg-purple-800 transition-all duration-300 font-semibold ${
                (!isAgreed || isSubmitting) && "opacity-50 cursor-not-allowed"
              }`}
              disabled={!isAgreed || isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
