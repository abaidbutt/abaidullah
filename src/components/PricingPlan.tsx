import React from 'react';
import { FaCheck } from 'react-icons/fa';

interface PricingPlanProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  backgroundColor: string;
}

const PricingPlan: React.FC<PricingPlanProps> = ({ title, price, description, features, backgroundColor }) => {
  return (
    <div className={`rounded-lg shadow-lg p-6 ${backgroundColor}`}>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-4xl font-bold mb-4">{price}</p>
      <p className="mb-4">{description}</p>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <FaCheck className="text-blue-500 mr-2" />
            {feature}
          </li>
        ))}
      </ul>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">Get Started</button>
    </div>
  );
};

export default PricingPlan;
