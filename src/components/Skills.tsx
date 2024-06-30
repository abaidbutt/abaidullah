import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    "JavaScript",
    "Typescript",
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
    "Elastic BeanStalk",
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
        <section id="skills" className="py-10 dark:bg-black bg-white text-black dark:text-white">
            <div className="container mx-auto px-4">
                <h2 className="md:text-4xl text-2xl font-bold mb-4 text-center ">MY SKILLS</h2>
                <p className="text-center mb-8 text-md md:text-lg">4+ years hands of experience on these skills set</p>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 md:gap-6 gap-3">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="dark:bg-white bg-black dark:text-black text-white md:p-6 p-3 rounded-lg shadow-md text-center hover:scale-105 transition duration-100"
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
