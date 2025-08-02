import React from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaCogs, FaShieldAlt, FaChartLine, FaClock, FaRocket, FaBrain, FaTools, FaTrophy } from 'react-icons/fa';

const VisionMission: React.FC = () => {
    return (
        <section id="vision-mission" className="py-20 dark:bg-black dark:text-white bg-white text-black relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-tr from-green-400/10 to-blue-600/10 rounded-full blur-3xl"></div>
            </div>
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-4"
                    >
                        <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-medium mb-4">
                            Startup-Focused Developer
                        </span>
                    </motion.div>
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="flex items-center justify-center mb-6"
                    >
                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-xl mr-4">
                            <FaLightbulb className="text-3xl text-white" />
                        </div>
                        <h2 className="md:text-5xl text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            My Vision & Approach
                        </h2>
                    </motion.div>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
                    >
                        I thrive in product-based environments, especially startups with bold ideas. From concept to deployment, 
                        I've built feature-rich apps across diverse domains—all tackled solo, end-to-end.
                    </motion.p>
                </div>

                {/* What I Do Best Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mb-16"
                >
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
                        <div className="flex items-center mb-6">
                            <div className="bg-gradient-to-r from-green-500 to-blue-500 p-3 rounded-xl mr-4">
                                <FaRocket className="text-2xl text-white" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
                                💡 What I Do Best
                            </h3>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                {
                                    icon: <FaCogs className="text-2xl" />,
                                    title: "End-to-End Ownership",
                                    description: "Take complete ownership of projects and ship them from scratch to production",
                                    gradient: "from-blue-500 to-cyan-500"
                                },
                                {
                                    icon: <FaBrain className="text-2xl" />,
                                    title: "Detective-Level Debugging",
                                    description: "Debug like a detective—leveraging docs, GPT, Medium, and YouTube for solutions",
                                    gradient: "from-purple-500 to-pink-500"
                                },
                                {
                                    icon: <FaChartLine className="text-2xl" />,
                                    title: "Continuous Growth",
                                    description: "Constantly evolving with Python and AI/ML as my next frontier",
                                    gradient: "from-green-500 to-teal-500"
                                },
                                {
                                    icon: <FaTools className="text-2xl" />,
                                    title: "Strategic Problem-Solving",
                                    description: "Problem-solve using divide-and-conquer thinking for complex challenges",
                                    gradient: "from-orange-500 to-red-500"
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                                    whileHover={{ scale: 1.02, y: -5 }}
                                    className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    <div className={`bg-gradient-to-r ${item.gradient} p-3 rounded-lg w-fit mb-4`}>
                                        <div className="text-white">{item.icon}</div>
                                    </div>
                                    <h4 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">{item.title}</h4>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Success Story Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mb-16"
                >
                    <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
                        <div className="flex items-center mb-6">
                            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-3 rounded-xl mr-4">
                                <FaTrophy className="text-2xl text-white" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
                                🧠 A Win I'm Proud Of
                            </h3>
                        </div>
                        
                        <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg">
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                I solved a challenge where <span className="font-bold text-orange-600 dark:text-orange-400">six developers had previously struggled</span>: 
                                building a plugin for a video streaming app that mimicked screen sharing without using a screenshare prompt.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                This involved <span className="font-semibold">custom Nylas integration</span> and creative engineering solutions. 
                                The client said it was exactly what they'd envisioned—finally realized.
                            </p>
                            <div className="bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-gray-600 dark:to-gray-800 p-4 rounded-lg">
                                <p className="text-sm font-medium text-gray-800 dark:text-gray-200 italic">
                                    "This was exactly what we envisioned—finally realized!" - Client Feedback
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* My Style Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mb-16"
                >
                    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
                        <div className="flex items-center mb-6">
                            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-3 rounded-xl mr-4">
                                <FaShieldAlt className="text-2xl text-white" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
                                ⚙️ My Working Style
                            </h3>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="bg-gradient-to-r from-indigo-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">🚀</span>
                                </div>
                                <h4 className="font-bold text-lg mb-2 text-gray-800 dark:text-white">Independent</h4>
                                <p className="text-gray-600 dark:text-gray-300 text-sm">Work autonomously with full project ownership</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-gradient-to-r from-green-500 to-teal-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">📚</span>
                                </div>
                                <h4 className="font-bold text-lg mb-2 text-gray-800 dark:text-white">Continuous Learning</h4>
                                <p className="text-gray-600 dark:text-gray-300 text-sm">Always learning and adapting to new technologies</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-gradient-to-r from-orange-500 to-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">⚡</span>
                                </div>
                                <h4 className="font-bold text-lg mb-2 text-gray-800 dark:text-white">Fast Adaptation</h4>
                                <p className="text-gray-600 dark:text-gray-300 text-sm">Quick to adapt and implement solutions</p>
                            </div>
                        </div>
                        
                        <div className="mt-8 bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg">
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-center">
                                <span className="font-semibold">Success, for me, isn't just launching</span>—it's fixing bugs that sharpen the product and deepen my learning. 
                                I believe in continuous improvement and turning challenges into opportunities for growth.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Domain Expertise */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                >
                    <div className="text-center mb-8">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 dark:text-white">
                            🌟 Domains I've Conquered Solo
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-8">
                            Feature-rich applications built end-to-end across diverse industries
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {[
                            { name: "Chit Funds", icon: "💰", color: "from-green-400 to-green-600" },
                            { name: "Agro Finance", icon: "🌾", color: "from-yellow-400 to-orange-500" },
                            { name: "NFC Management", icon: "📱", color: "from-blue-400 to-blue-600" },
                            { name: "Employee Tracking", icon: "👥", color: "from-purple-400 to-purple-600" },
                            { name: "Food Delivery", icon: "🍕", color: "from-red-400 to-pink-500" }
                        ].map((domain, index) => (
                            <motion.div
                                key={domain.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: 0.8 + (index * 0.1) }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className={`bg-gradient-to-r ${domain.color} text-white p-4 rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300`}
                            >
                                <div className="text-2xl mb-2">{domain.icon}</div>
                                <div className="text-sm font-medium">{domain.name}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default VisionMission;