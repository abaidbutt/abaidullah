import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    "React.js",
    "Next.js",
    "React Native",
    "Node.js",
    "Express.js",
    "Nest.js",
    "Docker",
    "AWS",
    "ECR",
    "ECS",
    "EC2", 
    "S3",
    "Lambda",
    "API Gateway",
    "Amplify",
    "DynamoDB",
    "Prisma",
    "Sequelize",
    "Jest",
    "Cypress",
    "Jira",
    "GitHub",
    "Firebase",
    "MongoDB",
    "MySQL",
    "Stripe",
    "Twilio"
];

const Skills: React.FC = () => {
    return (
        <section id="skills" className="py-10 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-4 text-center text-gradient">MY SKILLS</h2>
                <p className="text-center mb-8">4+ years hands of experience on these skills set</p>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white p-6 rounded-lg shadow-md text-center hover:scale-105 transition duration-100"
                        >
                            <h3 className="text-xl font-semibold">{skill}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
