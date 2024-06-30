import React, { useState } from 'react';
import FAQItem from './FAQItem';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData = [
    {
      question: 'What is MERN stack development?',
      answer:
        'MERN stack development is a full-stack web development approach that uses MongoDB, Express, React, and Node.js to create dynamic web applications.',
    },
    {
      question: 'Can you help me build a custom web application?',
      answer:
        'Yes! We specialize in custom web application development. Our team will work closely with you to understand your needs and deliver a solution that meets your specific requirements.',
    },
    {
      question: 'What is full-stack development?',
      answer:
        'Full-stack development refers to the process of developing both the front-end and back-end of a web application. Our team has expertise in both, allowing us to deliver full-stack solutions to our clients.',
    },
    {
      question: 'What programming languages do you specialize in?',
      answer:
        'We specialize in a variety of programming languages, including JavaScript, Python, and PHP. Our team is well-versed in the latest tools and frameworks to deliver high-quality solutions.',
    },
    {
      question: 'How long does it take to develop a web application?',
      answer:
        'The timeline for web application development depends on various factors, including the complexity of the project and the features required. Our team will provide a timeline estimate based on your specific project needs.',
    },
    {
      question: 'Do you provide web design services?',
      answer:
        'Yes, we offer web design services to complement our web development offerings. Our team will work with you to create a visually appealing and user-friendly website that aligns with your brand.',
    },
    {
      question: 'Do you provide ongoing maintenance and support for web applications?',
      answer:
        'Yes, we offer ongoing maintenance and support services for web applications. We ensure your application runs smoothly and stays up-to-date with the latest technologies.',
    },
    {
      question: 'How do I get started with AB Web Development?',
      answer:
        'The first step is to contact us to schedule a consultation. We’ll discuss your project needs, provide a detailed proposal, and work with you to create a plan of action.',
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-10 dark:bg-black dark:text-white bg-white text-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Find answers to commonly asked questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              toggleOpen={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
