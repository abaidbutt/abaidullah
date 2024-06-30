import React from 'react';
import { FaLightbulb, FaCogs, FaShieldAlt, FaChartLine, FaClock } from 'react-icons/fa';

const VisionMission: React.FC = () => {
    return (
        <section id="vision-mission" className="py-10 dark:bg-black dark:text-white bg-white text-black">
            <div className="container mx-auto px-4">
                <div className="flex flex-col justify-around items-center">
                    <div className="text-center md:w-1/2 p-4">
                        <FaLightbulb className="text-4xl mx-auto mb-4" />
                        <h3 className="md:text-4xl text-2xl font-bold mb-4">My  Vision</h3>
                        <p className="mb-4 text-md md:text-lg">
                            My vision is to become the leading web development agency by delivering quality solutions that drive business growth.
                        </p>
                    </div>
                    <div className="text-center p-4 w-full">
                        <ul className="flex flex-wrap justify-between items-stretch">
                            <li className="flex flex-col items-center w-full sm:w-1/2 lg:w-1/4 p-4">
                                <FaCogs className="text-5xl mb-4" />
                                <span className="text-center">To deliver customized web development solutions that meet your specific business needs.</span>
                            </li>
                            <li className="flex flex-col items-center w-full sm:w-1/2 lg:w-1/4 p-4">
                                <FaShieldAlt className="text-5xl mb-4" />
                                <span className="text-center">To provide quality web development services that are scalable and secure.</span>
                            </li>
                            <li className="flex flex-col items-center w-full sm:w-1/2 lg:w-1/4 p-4">
                                <FaChartLine className="text-5xl mb-4" />
                                <span className="text-center">To stay up-to-date with the latest web development technologies and trends.</span>
                            </li>
                            <li className="flex flex-col items-center w-full sm:w-1/2 lg:w-1/4 p-4">
                                <FaClock className="text-5xl mb-4" />
                                <span className="text-center">To deliver web development projects on-time, every time.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VisionMission;
