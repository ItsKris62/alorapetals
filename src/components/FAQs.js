import { useState } from 'react';

const FAQs = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: 'How do I place an order?',
      answer:
        'You can browse our flower catalog and add the desired flowers to your cart. Once done, proceed to checkout and fill in your details to complete the order.',
    },
    {
      question: 'What countries do you ship to?',
      answer:
        'We ship to multiple countries worldwide, including the USA, UK, Canada, Australia, and various parts of Europe. For a full list, please contact our customer service.',
    },
    {
      question: 'Can I customize my flower order?',
      answer:
        'Yes! You can customize your flower orders by specifying the flower type, size, and arrangement style when placing an order.',
    },
    {
      question: 'How can I track my shipment?',
      answer:
        'Once your order is dispatched, we will send you a tracking number to monitor the delivery progress in real-time.',
    },
    {
      question: 'Do you offer same-day delivery?',
      answer:
        'Same-day delivery is available in select regions. Contact our team to check if it’s available in your area.',
    },
  ];

  return (
    <section className="my-16">
      <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-300 py-4 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-700">{faq.question}</h3>
              <span className="text-gray-700">{openFAQ === index ? '-' : '+'}</span>
            </div>
            {openFAQ === index && (
              <p className="mt-2 text-gray-600 transition-all duration-300">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
