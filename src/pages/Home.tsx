import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import VisionMission from '../components/Vision';
import Pricing from '../components/Pricing';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <VisionMission />
      <Skills />
      <Projects />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
