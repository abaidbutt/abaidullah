import React from 'react';
import { FaLinkedin, FaGithub, FaFacebook, FaYoutube, FaTwitter, } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 text-center flex items-center md:justify-between justify-center gap-5 flex-wrap">
        <p className="mt-4 text-lg">
          Designed and built by Abaid Ullah with ❤️ and ☕️.
        </p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="https://linkedin.com/in/abaidbutt" className="hover:text-blue-500">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/abaidbutt" className="hover:text-blue-400">
            <FaGithub size={24} />
          </a>
          <a href="https://x.com/bestabaidbutt" className="hover:text-blue-600">
            <FaTwitter size={24} />
          </a>
          <a href="www.youtube.com/@bestabaidbutt" className="hover:text-pink-400">
            <FaYoutube size={24} />
          </a>
        </div>
        <p className="text-sm font-bold">&copy; 2024 Abaid Ullah. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
