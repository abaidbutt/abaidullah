import React from 'react';
import PricingPlan from './PricingPlan';

const Pricing: React.FC = () => {
  const pricingPlans = [
    {
      title: 'Silver',
      price: '$1,000',
      description: 'Build your online presence with our MERN stack development expertise. This package includes essential features for attracting online visitors and building your brand.',
      features: ['MERN Stack Development', 'Basic Analytics & Reporting', 'Standard Support & Guidance', 'Responsive Design'],
      backgroundColor: 'bg-gray-100'
    },
    {
      title: 'Gold',
      price: '$2,000',
      description: 'Take your online business to the next level with our web application development package. I am combines design and development to deliver a seamless user experience.',
      features: ['Custom Web Application Development', 'Advanced Analytics & Reporting', 'Dedicated Support', '(All from Silver)'],
      backgroundColor: 'bg-gray-200'
    },
    {
      title: 'Platinum',
      price: '$4,999',
      description: 'Maximize your digital potential with our full stack development package. This package includes advanced features and personalized support to help you exceed your business goals.',
      features: ['Full Stack Development', 'Custom Digital Strategy', 'VIP Support', '(All from Silver & Gold)'],
      backgroundColor: 'bg-gray-300'
    }
  ];

  return (
    <section className="py-10 bg-white text-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Pricing</h2>
        <p className="mb-10">We provide expert digital solutions to power your business growth. I am a dedicated to delivering innovative and effective web development services.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingPlan key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
