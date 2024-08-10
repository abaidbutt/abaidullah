import React from 'react';
import { motion } from "framer-motion"
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const projects = [
  {
    title: "Gulf Job 360",
    description: "Developed a platform for job hunting for job opportunities, enhancing collaboration and distribution in the job market",
    image: "/path/to/image.png" // Replace with the actual path to your image
  },
  {
    title: "Keventer & Nizam",
    description: "Developed a mobile app for Keventers to improve food pickup. Used Redux for state management and React.js for an efficient admin panel",
    image: "/path/to/image.png" // Replace with the actual path to your image
  },
  {
    title: "Yougoz",
    description: "Service booking app for beauty salons, gyms, and fitness centers. Charged from service provider based on subscription and invoiceing model",
    image: "/path/to/image.png"
  },
  {
    title: "PoolGrab",
    description: "Contributed to the app by managing data storage, integrating Google Maps, and designing the user interface",
    image: "/path/to/image.png" // Replace with the actual path to your image
  },
  {
    title: "Shield",
    description: "Built the Shield App with React Native, Node.js, and MongoDB, focusing on enhancing employee attendance experience through Express.js APIs",
    image: "/path/to/image.png" // Replace with the actual path to your image
  },
  {
    title: "Boost Summit Crew",
    description: "Analytics dashboard of Google Analytics, subscription model using Stripe, chat app, and task management",
    link: "https://boost.summitcrew.com"
  },
  {
    title: "Town Town",
    description: "Develop a user-friendly app for local community events, dining, entertainment, news, and services",
    image: "/path/to/image.png" // Replace with the actual path to your image
  },

  {
    title: "Fuboot",
    description: "User-friendly chit fund management app for creating and managing monthly chit funds with friends.",
    image: "/mnt/data/image.png"
  },

  {
    title: "Myron App",
    description: "E-commerce app with Firebase, React.js, and blog features. checkout with stripe and order tracking",
    image: "/path/to/image.png"
  },


  {
    title: "AR Face App",
    description: "Augmented reality app for video effects like glasses, necklaces, masks, and earrings.",
    link: "https://arapp-one.vercel.app/"
  },
  {
    title: "TactLink",
    description: "Designed and Integrate Apis for a Social network app for managing user contacts, friendships, and data sharing.",
    image: "/mnt/data/image.png"
  },
  {
    title: "Agro Finance",
    description: "Developed a Mobile App that Helps farmers manage their yearly finances and operations efficiently.",
    image: "/mnt/data/image.png"
  },

  {
    title: "Royce Lighting",
    description: "Platform for advertising and selling lighting products, allowing user engagment.",
    image: "/mnt/data/image.png"
  },
  {
    title: "Bonik Commerce",
    description: "E-commerce app with categories, checkout, and product management.",
    image: "/path/to/image.png"
  },
  {
    title: "Circul8",
    description: "Job recruiting app like LinkedIn for connecting people and companies.",
    link: "https://circul8.me"
  },
  {
    title: "Movers One",
    description: "Bus ticket booking app, users can select bus and timings.",
    link: "https://movers-one.vercel.app"
  },
  {
    title: "Infinite Tech",
    description: "Call center data management app. Integrated with Salesforce.",
    image: "/path/to/image.png"
  },
  {
    title: "The News",
    description: "Provides daily news updates and articles related information.",
    image: "/mnt/data/image.png"
  },
  {
    title: "The Chenab Club",
    description: "Manages club memberships and activities of members.",
    image: "/mnt/data/image.png"
  },
  {
    title: "SPS Fulfillment",
    description: "E-commerce app on React.js with Firebase checkout.",
    link: "https://spsfulfillment.com/"
  },


];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-10 dark:bg-black dark:text-white bg-white text-black">
      <div className="container mx-auto px-4">
        <h2 className="md:text-4xl text-2xl font-bold mb-4 text-center">PROJECTS</h2>
        <p className="text-center mb-8 text-md md:text-lg">More than 25 projects has been develop and published </p>

        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 md:gap-6 gap-3">
          {projects.map((project, index) => (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              key={index} className="dark:bg-white bg-black dark:text-black text-white md:p-4 p-2 rounded shadow hover:scale-105 transition duration-100">
              {/* <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded" /> */}
              <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
              <p className="mt-2">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <ProjectsGrid />

    </section>
  );
};

const ProjectCard = ({ project }: { project: { title: string, link: string, github?: string } }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="dark:bg-gray-800 bg-white dark:text-white text-gray-800 md:p-6 p-3 rounded-lg shadow-lg hover:shadow-xl transform transition-transform duration-200 hover:scale-105"
    >
      <div className="p-4 flex  items-center justify-between gap-4">
        <h3 className="text-xl font-bold">{project.title}</h3>
        <div className="inline-flex items-center ">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline hover:text-blue-700 transition-colors"
          >
            <FiExternalLink className="ml-1" size={25} color='white' />
          </a>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 underline hover:text-gray-900 transition-colors"
            >
              <FiGithub className="ml-1" size={25} color='white' />
            </a>
          )}

        </div>
      </div>
    </motion.div>
  );
};



const ProjectsGrid = () => {
  return (
    <div className="container mx-auto px-4 mt-10">
      <h2 className="md:text-4xl text-2xl font-bold mb-6 text-center">UI/UX Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-6 gap-3">
        {uiUxProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
const uiUxProjects = [
  {
    title: "InTouch Delta",
    link: "https://intouch-delta.vercel.app/"
  },
  {
    title: "TipTop Taupe",
    link: "https://tiptop-taupe.vercel.app/"
  },
  {
    title: "Main Weld Three",
    link: "https://main-weld-three.vercel.app/"
  },
  {
    title: "Shyft Digitally 360",
    description: "ERP system designed for users.",
    link: "https://shyftdigitally360.vercel.app/"
  },
  {
    title: "Host Buddy",
    description: "Hosting service app.",
    link: "https://host-buddy-phi.vercel.app/"
  },
  {
    title: "2BMeta",
    link: "https://2bmeta.vercel.app/"
  },
  {
    title: "Mick Society",
    link: "https://micksociety.vercel.app/"
  },
  {
    title: "Buddies Club",
    link: "https://buddies-club.vercel.app/"
  },
  {
    title: "FAANG Investing",
    link: "https://faang-investing.vercel.app/"
  },
  {
    title: "Analytics Dashboard",
    link: "https://analytics-dashboard-bice.vercel.app/"
  },
  {
    title: "Tattoo Gallery",
    link: "https://tattoo-gallery-one.vercel.app/"
  },
];

