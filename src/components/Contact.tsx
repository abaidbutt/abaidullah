import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGithub, FaTimes } from 'react-icons/fa';
import { TbClockHour4 } from "react-icons/tb";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic validation
    if (formData.name.trim() === '' || formData.email.trim() === '' || formData.message.trim() === '') {
      alert('Please fill in all fields.');
      return;
    }

    // Assuming all fields are valid, construct the mailto link
    const subject = 'Message from Contact Form';
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AMessage: ${formData.message}`;
    const mailToLink = `mailto:bestabaidullahbutt@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Redirect to mail client
    window.location.href = mailToLink;
  };

  return (
    <section id="contact" className="py-10 dark:bg-black dark:text-white bg-white text-black relative overflow-hidden">
      <h2 className="md:text-4xl text-2xl font-bold mb-4 text-center">Let's connect</h2>
      <p className="text-md md:text-lg mb-4 text-center">Contact me today to schedule a consultation</p>
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className=" flex flex-col justify-center space-y-6 mt-8 md:mt-0 md:pl-8">
          <div className="flex items-center space-x-2">
            <div className='bg-black dark:bg-white rounded shadow p-2'>
              <FaMapMarkerAlt size={24} className="text-white dark:text-black" />
            </div>
            <a href="https://www.google.com/maps/search/?api=1&query=Lahore%2C+Punjab%2C+Pakistan" target="_blank" rel="noopener noreferrer" className="text-lg">
              Lahore, Punjab, Pakistan
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <div className='bg-black dark:bg-white rounded shadow p-2'>
              <FaPhone size={24} className="text-white dark:text-black" />
            </div>
            <a href="tel:+923111715499" className="text-lg">+92 (311) 171-5499</a>
          </div>
          <div className="flex items-center space-x-2">
            <div className='bg-black dark:bg-white rounded shadow p-2'>
              <FaEnvelope size={24} className="text-white dark:text-black" />
            </div>
            <a href="mailto:bestabaidullahbutt@gmail.com" className="text-lg">bestabaidullahbutt@gmail.com</a>
          </div>
          <div className="flex items-center space-x-2">
            <div className='bg-black dark:bg-white rounded shadow p-2'>

              <FaGithub size={24} className="text-white dark:text-black" />
            </div>
            <a href="https://github.com/abaidbutt" className="text-lg hover:text-blue-400">github.com/abaidbutt</a>
          </div>
          <div className="flex items-center space-x-2">
            <div className='bg-black dark:bg-white rounded shadow p-2'>
              <TbClockHour4 size={24} className="text-white dark:text-black" />
            </div>
            <a href="https://github.com/abaidbutt" className="text-lg hover:text-blue-400">

              Monday - Friday | 12pm - 2am
            </a>
          </div>
        </div>
        <div className="">

          <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto md:mx-0 bg-white p-6 rounded shadow-lg transform transition duration-100 hover:scale-105">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input type="text" placeholder='Ex: John Doe' name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input type="email" name="email" placeholder='Ex: yourmail@example.com' value={formData.email} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium">Message</label>
              <textarea placeholder='Write your message or question here' name="message" value={formData.message} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded"></textarea>
            </div>
            <button type="submit" className="w-full bg-gray-800 text-white px-4 py-2 rounded transform transition duration-100 hover:bg-gray-700">
              Get Started
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
