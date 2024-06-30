import React from 'react';
import { motion } from "framer-motion"
const projects = [
  {
    title: "Job Recurring Platform",
    description: "Developed a job recurring platform, fostering connections between users. Facilitated contribution and distribution among participants, enhancing collaboration in the job market.",
    image: "/path/to/image.png" // Replace with the actual path to your image
  },
  {
    title: "Food App",
    description: "Led the development of a cutting-edge React Native-based mobile app for Keventers, optimizing the food pickup experience. Employed Redux for robust state management, ensuring seamless user interactions. Crafted an intuitive Admin Panel using React.js and Firebase, enhancing operational efficiency for Keventers.",
    image: "/path/to/image.png" // Replace with the actual path to your image
  },
  {
    title: "PoolGrab App",
    description: "Played a crucial role in various aspects of the PoolGrab app. Successfully managed data storage, integrated Google Maps and Location Markers, and contributed to UI Design.",
    image: "/path/to/image.png" // Replace with the actual path to your image
  },
  {
    title: "Hybrid app developer | PlanetSid",
    description: "Contributed to the development of the Shield App using React Native, Node.js, and MongoDB. Developed APIs in Express.js and implemented them in React Native CLI, enhancing user experience for all stakeholders.",
    image: "/path/to/image.png" // Replace with the actual path to your image
  },
  {
    title: "MERN Stack Developer | Shyft Digitally",
    description: "Led the development of a comprehensive web and mobile application using Node.js, Express, MongoDB, React.js, and Next.js. Engineered a user-friendly app and implemented a CMS management tool.",
    image: "/path/to/image.png" // Replace with the actual path to your image
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-10 dark:bg-black dark:text-white bg-white text-black">
      <div className="container mx-auto px-4">
        <h2 className="md:text-4xl text-2xl font-bold mb-4 text-center">PROJECTS</h2>
        <p className="text-center mb-8 text-md md:text-lg">More than 25 projects has been develop and publish </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              key={index} className="dark:bg-white bg-black dark:text-black text-white p-4 rounded shadow hover:scale-105 transition duration-100">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded" />
              <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
              <p className="mt-2">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
