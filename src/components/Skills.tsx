import React from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaReact, FaAws, FaMobile, FaBrain, FaRobot } from 'react-icons/fa';
import { SiDjango, SiFastapi, SiFlask, SiMongodb, SiExpress, SiNodedotjs, SiTensorflow, SiPandas, SiNumpy, SiScikitlearn } from 'react-icons/si';

const skillCategories = [
    {
        title: "Python & Backend",
        icon: <FaPython className="text-3xl mb-2" />,
        color: "from-blue-500 to-green-500",
        skills: [
            { name: "Python", icon: <FaPython /> },
            { name: "FastAPI", icon: <SiFastapi /> },
            { name: "Django", icon: <SiDjango /> },
            { name: "Flask", icon: <SiFlask /> },
        ]
    },
    {
        title: "AI/ML & Data Science",
        icon: <FaBrain className="text-3xl mb-2" />,
        color: "from-purple-500 to-pink-500",
        skills: [
            { name: "Pandas", icon: <SiPandas /> },
            { name: "NumPy", icon: <SiNumpy /> },
            { name: "Scikit-learn", icon: <SiScikitlearn /> },
            { name: "TensorFlow", icon: <SiTensorflow /> },
            { name: "RAG Systems", icon: <FaBrain /> },
            { name: "Fine-tuning", icon: <FaRobot /> },
            { name: "Voice Agents", icon: <FaRobot /> },
            { name: "Agentic AI", icon: <FaBrain /> },
        ]
    },
    {
        title: "MERN Stack",
        icon: <FaReact className="text-3xl mb-2" />,
        color: "from-cyan-500 to-blue-500",
        skills: [
            { name: "React.js", icon: <FaReact /> },
            { name: "Node.js", icon: <SiNodedotjs /> },
            { name: "Express.js", icon: <SiExpress /> },
            { name: "MongoDB", icon: <SiMongodb /> },
            { name: "Next.js", icon: <FaReact /> },
            { name: "TypeScript", icon: <FaReact /> },
        ]
    },
    {
        title: "Mobile Development",
        icon: <FaMobile className="text-3xl mb-2" />,
        color: "from-green-500 to-teal-500",
        skills: [
            { name: "React Native", icon: <FaMobile /> },
            { name: "iOS Development", icon: <FaMobile /> },
            { name: "Android Development", icon: <FaMobile /> },
            { name: "Cross-platform", icon: <FaMobile /> },
        ]
    },
    {
        title: "Cloud & DevOps",
        icon: <FaAws className="text-3xl mb-2" />,
        color: "from-orange-500 to-red-500",
        skills: [
            { name: "AWS", icon: <FaAws /> },
            { name: "EC2", icon: <FaAws /> },
            { name: "S3", icon: <FaAws /> },
            { name: "Lambda", icon: <FaAws /> },
            { name: "Docker", icon: <FaAws /> },
            { name: "CI/CD", icon: <FaAws /> },
        ]
    },
    {
        title: "Automation & Integration",
        icon: <FaRobot className="text-3xl mb-2" />,
        color: "from-indigo-500 to-purple-500",
        skills: [
            { name: "n8n Workflows", icon: <FaRobot /> },
            { name: "Chatbots", icon: <FaRobot /> },
            { name: "API Integration", icon: <FaRobot /> },
            { name: "Workflow Automation", icon: <FaRobot /> },
        ]
    }
];

const Skills: React.FC = () => {
    return (
        <section id="skills" className="py-10 dark:bg-black bg-white text-black dark:text-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="md:text-5xl text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Technical Expertise
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Full-stack development with cutting-edge AI/ML integration and modern cloud technologies
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                            whileHover={{ scale: 1.02, y: -5 }}
                            className="bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 from-white to-gray-50 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                        >
                            <div className={`bg-gradient-to-r ${category.color} p-3 rounded-xl w-fit mx-auto mb-4 text-white`}>
                                {category.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-center">{category.title}</h3>
                            <div className="grid grid-cols-2 gap-3">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                                        className="flex items-center space-x-2 p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                                    >
                                        <span className="text-sm">{skill.icon}</span>
                                        <span className="text-sm font-medium">{skill.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
                
                {/* AI/ML Specializations */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-16 text-center"
                >
                    <h3 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800 dark:text-white">
                        AI/ML Specializations
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                        {[
                            "Chatbot Development",
                            "RAG Systems",
                            "Model Fine-tuning",
                            "Voice Agents",
                            "Agentic AI",
                            "n8n Automation",
                            "Data Analysis",
                            "ML Pipelines"
                        ].map((specialization, index) => (
                            <motion.div
                                key={specialization}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: 0.6 + (index * 0.1) }}
                                whileHover={{ scale: 1.05 }}
                                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm font-medium"
                            >
                                {specialization}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
