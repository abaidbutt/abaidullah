import React, { useState } from 'react';
import { FaBars, FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-[#0a2862] text-white px-4 py-3">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">AB</div>
        <div className="md:hidden" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
        <ul className="hidden md:flex space-x-4">
          <li><a href="#home" className="block py-2 px-4 hover:underline">Home</a></li>
          <li><a href="#about" className="block py-2 px-4 hover:underline">About</a></li>
          <li><a href="#skills" className="block py-2 px-4 hover:underline">Skills</a></li>
          <li><a href="#projects" className="block py-2 px-4 hover:underline">Projects</a></li>
          <li><a href="#contact" className="block py-2 px-4 hover:underline">Contact</a></li>
        </ul>
      </div>
      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
        <div className="bg-[#0a2862] w-64 h-full p-4 relative">
          <ul className="flex flex-col space-y-4">
            <li><a href="#home" className="block py-2 px-4 hover:underline" onClick={toggleMobileMenu}>Home</a></li>
            <li><a href="#about" className="block py-2 px-4 hover:underline" onClick={toggleMobileMenu}>About</a></li>
            <li><a href="#skills" className="block py-2 px-4 hover:underline" onClick={toggleMobileMenu}>Skills</a></li>
            <li><a href="#projects" className="block py-2 px-4 hover:underline" onClick={toggleMobileMenu}>Projects</a></li>
            <li><a href="#contact" className="block py-2 px-4 hover:underline" onClick={toggleMobileMenu}>Contact</a></li>
          </ul>
          <div className="md:hidden flex justify-end bottom-5 absolute right-5" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaChevronLeft size={24} /> : <FaChevronRight size={24} />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
