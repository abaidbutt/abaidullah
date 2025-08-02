import React from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaReact, FaMobile, FaBrain, FaAws, FaRobot } from 'react-icons/fa';
import { SiDjango, SiFastapi, SiFlask, SiTensorflow } from 'react-icons/si';
import ProgressBars from './ProgressBar';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 dark:bg-black dark:text-white bg-white text-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-tr from-green-400/10 to-blue-600/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto p-3">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:text-5xl text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            About Me
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Full-stack developer and AI engineer passionate about creating intelligent, scalable solutions
          </motion.p>
        </div>
        
        <div className="md:grid md:grid-cols-2 md:gap-8">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-lg mr-3">
                  <FaReact className="text-white text-xl" />
                </div>
                <h3 className="text-xl font-bold">Full-Stack Development</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Started my journey in 2020 as a React.js developer and evolved into a comprehensive MERN stack developer. 
                Specialized in building scalable web applications and mobile solutions with modern frameworks and best practices.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-2 rounded-lg mr-3">
                  <FaPython className="text-white text-xl" />
                </div>
                <h3 className="text-xl font-bold">Python & Backend Expertise</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Proficient in Python ecosystem with FastAPI, Django, and Flask for building robust backend systems. 
                Experience in API development, database management with MongoDB, MySQL, and PostgreSQL.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg mr-3">
                  <FaBrain className="text-white text-xl" />
                </div>
                <h3 className="text-xl font-bold">AI/ML & Automation</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Specialized in AI/ML solutions including chatbot development, RAG systems, model fine-tuning, and voice agents. 
                Expert in workflow automation with n8n, agentic AI systems, and data analysis with Pandas, NumPy, and Scikit-learn.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-lg mr-3">
                  <FaAws className="text-white text-xl" />
                </div>
                <h3 className="text-xl font-bold">Cloud & DevOps</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Extensive experience with AWS services (EC2, S3, Lambda, ECS), Docker containerization, 
                auto-scaling with load balancers, and CI/CD pipelines using GitHub Actions. Payment integration expertise with Stripe.
              </p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 md:mt-0"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
                Core Competencies
              </h3>
              <ProgressBars />
            </div>
            
            {/* Technology Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700"
            >
              <h4 className="text-lg font-bold mb-4 text-center text-gray-800 dark:text-white">
                Technology Stack
              </h4>
              <div className="grid grid-cols-4 gap-4">
                {[
                  { icon: <FaPython />, name: "Python", color: "text-yellow-500" },
                  { icon: <SiFastapi />, name: "FastAPI", color: "text-green-500" },
                  { icon: <SiDjango />, name: "Django", color: "text-green-700" },
                  { icon: <FaReact />, name: "React", color: "text-blue-500" },
                  { icon: <FaMobile />, name: "React Native", color: "text-blue-600" },
                  { icon: <FaBrain />, name: "AI/ML", color: "text-purple-500" },
                  { icon: <FaAws />, name: "AWS", color: "text-orange-500" },
                  { icon: <FaRobot />, name: "Automation", color: "text-indigo-500" },
                ].map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.9 + (index * 0.1) }}
                    whileHover={{ scale: 1.1 }}
                    className="flex flex-col items-center p-3 bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
                  >
                    <div className={`text-2xl mb-2 ${tech.color}`}>
                      {tech.icon}
                    </div>
                    <span className="text-xs font-medium text-gray-600 dark:text-gray-300">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
