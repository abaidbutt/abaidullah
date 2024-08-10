import React from 'react';
import { motion } from 'framer-motion';
import ProgressBars from './ProgressBar';

const skills = ["React.js", "Next.js", "React Native", "NestJS", "Express.js"];

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 dark:bg-black dark:text-white bg-white text-black">
      <div className="container mx-auto p-3">
        <div className="text-center mb-12">
          <h2 className="md:text-4xl text-2xl font-extrabold mb-4">Journey</h2>
          <p className="text-md md:text-lg">Crafting innovative solutions with cutting-edge technologies</p>
        </div>
        <div className="md:grid md:grid-cols-2 md:gap-8">
          <div className='space-y-6'>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className=""
            >
              <p className="text-lg">
                I graduated in 2020 and began learning web development during my studies. I started my career as a React.js developer and later transitioned to a MERN Stack Developer role.

              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className=""
            >
              <p className="text-lg">
                I am a full-stack developer expertise with MERN Stack technologies,  proficient in React.js, Next.js, React Native, and Node.js.
                My skill set includes efficiently managing APIs and data with Firebase, MongoDB, and MySQL.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className=""
            >
              <p className="text-lg">

                I have expertise in integrating payment methods for subscriptions and invoices with Stripe.
                I have experience with Docker, AWS EC2, auto-scaling with load balancers, and GitHub Actions for CI/CD pipelines with ECR and ECS.
              </p>
            </motion.div>
          </div>
          <div className="mt-8 md:mt-0">
            {/* <h3 className="text-3xl font-bold mb-6 text-center md:text-left px-4 md:px-8 lg:px-12">Top Skills</h3> */}
            <div className="flex flex-col gap-4">
              <ProgressBars />
              {/* {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md text-center hover:scale-105 transition duration-100"
                >
                  {skill}
                </motion.div>
              ))} */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
