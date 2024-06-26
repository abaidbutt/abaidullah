import React from 'react';
// import abaid from '/abaid-ullah.jpg';
import { FaStar } from 'react-icons/fa';

const Hero: React.FC = () => {
    return (
        <section id="home" className="py-10 bg-gray-100 text-gray-800 relative">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-1/2 text-center md:text-left relative">
                        <h1 className="text-4xl font-bold mb-4 text-gradient">Abaid Ullah</h1>
                        <p className="mb-4">
                            Full Stack Developer expertise in mern stack web and mobile development
                        </p>
                        <a href="#contact" className="inline-block px-6 py-2 rounded btn">Contact Me</a>
                    </div>
                    <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center relative">
                        <img
                            src={process.env.PUBLIC_URL + "/abaid-ullah.jpg"}
                            alt="Abaid Ullah"
                            className="rounded-full w-64 h-64 md:w-96 md:h-96 hover:scale-105 relative"
                        />
                        <StarRating />
                        <Experience />
                        <ProjectSummary />
                    </div>
                </div>
            </div>
        </section>
    );
};
const StarRating: React.FC = () => {
    return (
        <div className="absolute top-4 md:right-12 right-6 flex flex-col items-center justify-center bg-white p-2 rounded-lg shadow-lg">
            <div className="flex text-yellow-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </div>
            <p className="md:ml-10 ml-5 text-black text-sm md:text-lg font-bold">4.8 / 5.0</p>
        </div>
    );
};
const ProjectSummary: React.FC = () => {
    return (
        <div className="absolute bottom-4 right-12 bg-white p-2 rounded-lg shadow-lg md:block hidden">
            <p className="text-black text-md font-bold">15 Full Stack</p>
            <p className="text-black text-md font-bold">10 Frontend</p>
            <p className="text-black text-md font-bold">4 Deployment</p>
        </div>
    );
};

const Experience: React.FC = () => {
    return (
        <div className="absolute bottom-4 md:left-14 left-6 bg-white p-2 rounded-lg shadow-lg">
            <p className="text-black text-sm md:text-md font-bold">
                <span className='text-center text-md md:text-xl block'>4+ Years</span>
                of Experience</p>
        </div>
    );
};


export default Hero;
