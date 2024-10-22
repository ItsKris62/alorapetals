import { useState } from 'react';

const FAQs = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: 'How long does it take to get your order?',
      answer:
        'We process orders within 3 to 4 working days and the delivery is done on the last day. We work with trusted logistics partners to ensure timely delivery.',
    },
    {
      question: 'What regions or countries do you export to?',
      answer:
        'We export to multiple regions worldwide, including the Middle East, Asia, Europe, and Africa. If you are located outside these regions please contact us to discuss shipping options.',
    },
    {
      question: 'How can I contact customer service?',
      answer:
        'Our dedicated customer support team is always available to assist you via phone or e-mail. You can find our customer support contacts at the bottom.',
    },
    {
      question: 'What is your minimum order quantity (MOQ)?',
      answer:
        'The minimum order quantity advised is 10 boxes for your whole order, which is approximately 3,000 stems.',
    },
    {
      question: 'How can I track my shipment?',
      answer:
        'Once your order is dispatched, we will send you a tracking number to monitor the delivery progress in real-time.',
    },
  ];

  return (
    <section className="my-16 px-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-300 py-4 cursor-pointer hover:bg-gray-100 transition-all duration-200"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-base sm:text-lg font-semibold text-gray-700">{faq.question}</h3>
              <span className="text-gray-700">{openFAQ === index ? '-' : '+'}</span>
            </div>
            {openFAQ === index && (
              <p className="mt-2 text-sm sm:text-base text-gray-600 transition-all duration-300">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
