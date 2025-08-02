import React, { Suspense } from 'react';
import { FaStar, FaPython, FaReact, FaMobile, FaBrain, FaAws } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
    return (
        <section id="home" className="py-16 dark:bg-black dark:text-white bg-white text-black relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-green-400/20 to-blue-600/20 rounded-full blur-3xl"></div>
            </div>
            
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2 text-center md:text-left relative z-10"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mb-4"
                        >
                            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-medium mb-4">
                                Full-Stack Developer & AI Engineer
                            </span>
                        </motion.div>
                        
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="md:text-6xl text-4xl font-bold mb-6 leading-tight"
                        >
                            Hi, I'm{' '}
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Abaid Ullah
                            </span>
                        </motion.h1>
                        
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="mb-8 text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
                        >
                            Crafting intelligent solutions with{' '}
                            <span className="font-semibold text-blue-600">Python</span>,{' '}
                            <span className="font-semibold text-cyan-600">MERN Stack</span>,{' '}
                            <span className="font-semibold text-green-600">React Native</span>, and{' '}
                            <span className="font-semibold text-purple-600">AI/ML</span> technologies
                        </motion.p>
                        
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="flex flex-col sm:flex-row gap-4 mb-8"
                        >
                            <a 
                                href="#contact" 
                                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                            >
                                Let's Collaborate
                            </a>
                            <a 
                                href="#projects" 
                                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                            >
                                View Projects
                            </a>
                        </motion.div>
                        
                        {/* Tech Stack Icons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex items-center space-x-6"
                        >
                            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Tech Stack:</span>
                            <div className="flex space-x-4">
                                <FaPython className="text-2xl text-yellow-500 hover:scale-110 transition-transform" />
                                <FaReact className="text-2xl text-blue-500 hover:scale-110 transition-transform" />
                                <FaMobile className="text-2xl text-green-500 hover:scale-110 transition-transform" />
                                <FaBrain className="text-2xl text-purple-500 hover:scale-110 transition-transform" />
                                <FaAws className="text-2xl text-orange-500 hover:scale-110 transition-transform" />
                            </div>
                        </motion.div>
                    </div>
                    
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center relative"
                    >
                        <Suspense fallback={<div className="h-16 w-16 animate-bounce rounded-full dark:bg-white bg-black"></div>
                        }>
                            <ImageComponent />
                        </Suspense>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ImageComponent: React.FC = () => {
    return (
        <div className="relative">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="w-80 h-80 md:w-96 md:h-96 relative"
            >
                {/* Gradient Ring */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full p-1">
                    <div className="w-full h-full bg-white dark:bg-black rounded-full p-2">
                        <img
                            src={process.env.PUBLIC_URL + "/abaid-ullah.jpg"}
                            alt="Abaid Ullah"
                            className="rounded-full w-full h-full object-cover"
                        />
                    </div>
                </div>
                
                {/* Floating Elements */}
                <StarRating />
                <Experience />
                <ProjectSummary />
            </motion.div>
        </div>
    );
};

const StarRating: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            className="absolute -top-4 -right-4 flex flex-col items-center justify-center bg-white dark:bg-gray-800 p-3 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700"
        >
            <div className="flex text-yellow-500 mb-1">
                {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-sm" />
                ))}
            </div>
            <p className="text-gray-800 dark:text-gray-200 text-xs font-bold">4.9/5.0</p>
            <p className="text-gray-500 dark:text-gray-400 text-xs">Client Rating</p>
        </motion.div>
    );
};

const ProjectSummary: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            whileHover={{ scale: 1.05 }}
            className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 md:block hidden"
        >
            <div className="text-center">
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">25+</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Projects</p>
            </div>
        </motion.div>
    );
};

const Experience: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            whileHover={{ scale: 1.05 }}
            className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700"
        >
            <div className="text-center">
                <p className="text-2xl font-bold text-green-600 dark:text-green-400">4+</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Years Exp</p>
            </div>
        </motion.div>
    );
};

export default Hero;
