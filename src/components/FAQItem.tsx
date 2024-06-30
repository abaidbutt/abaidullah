import React from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface FAQItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    toggleOpen: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, toggleOpen }) => {
    return (
        <div className="border-b border-gray-200 py-4">
            <div
                onClick={toggleOpen}
                className="flex justify-between items-center cursor-pointer"
            >
                <h4 className="text-lg font-semibold">{question}</h4>
                <div>
                    {isOpen ? (
                        <FaChevronUp className="text-gray-500" />
                    ) : (
                        <FaChevronDown className="text-gray-500" />
                    )}
                </div>
            </div>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-screen' : 'max-h-0'
                }`}
            >
                <p className="mt-2 text-gray-700">{answer}</p>
            </div>
        </div>
    );
};

export default FAQItem;
