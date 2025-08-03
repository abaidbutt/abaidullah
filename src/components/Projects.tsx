import React from 'react';
import { motion } from "framer-motion"
import { FiExternalLink } from 'react-icons/fi';
import { FaMobile, FaGlobe, FaBrain, FaPython, FaAws } from 'react-icons/fa';
import { SiDjango, SiFastapi, SiFlask, SiNodedotjs } from 'react-icons/si';

// React Native Projects
const reactNativeProjects = [
  {
    title: "Tactlink Mobile App",
    description: "Social network app for managing user contacts, friendships, and data sharing with real-time messaging.",
    techStack: ["React Native", "Node.js", "MongoDB", "Socket.io"],
    role: "Full-Stack Developer",
    category: "Social Network"
  },
  {
    title: "Royce Lighting Mobile App",
    description: "Platform for advertising and selling lighting products with AR visualization and user engagement features.",
    techStack: ["React Native", "Firebase", "AR Kit", "Stripe"],
    role: "Mobile Developer",
    category: "E-commerce"
  },
  {
    title: "Poolgrab App",
    description: "Ride-sharing app with Google Maps integration, real-time tracking, and payment processing.",
    techStack: ["React Native", "Google Maps API", "Firebase", "Stripe"],
    role: "Frontend Developer",
    category: "Transportation"
  },
  {
    title: "Agro Finance",
    description: "Mobile app helping farmers manage yearly finances, crop planning, and agricultural operations efficiently.",
    techStack: ["React Native", "SQLite", "Chart.js", "Push Notifications"],
    role: "Full-Stack Developer",
    category: "Agriculture"
  },
  {
    title: "Shield App",
    description: "Employee security and attendance tracking app with biometric authentication and real-time monitoring.",
    techStack: ["React Native", "Node.js", "MongoDB", "Biometric API"],
    role: "Full-Stack Developer",
    category: "Security"
  },
  {
    title: "Keventers / Nizams",
    description: "Food delivery apps with order tracking, payment integration, and real-time delivery updates.",
    techStack: ["React Native", "Redux", "Node.js", "Stripe", "Google Maps"],
    role: "Mobile Developer",
    category: "Food Delivery"
  },
  {
    title: "Vlore App",
    description: "NFC management system for contactless payments, access control, and digital identity verification.",
    techStack: ["React Native", "NFC API", "Blockchain", "Encryption"],
    role: "Mobile Developer",
    category: "Fintech"
  },
  {
    title: "Chit Fund App (Fuboot)",
    description: "User-friendly chit fund management app for creating and managing monthly chit funds with friends.",
    techStack: ["React Native", "Firebase", "Payment Gateway", "Analytics"],
    role: "Full-Stack Developer",
    category: "Finance"
  },
  {
    title: "The Chenab Club",
    description: "Club membership management app with event booking, member directory, and facility reservations.",
    techStack: ["React Native", "Node.js", "MySQL", "Calendar API"],
    role: "Full-Stack Developer",
    category: "Membership"
  }
];

// Web & Full-Stack Projects
const webProjects = [
  {
    title: "Gulf Job 360",
    description: "Comprehensive job hunting platform with AI-powered matching, resume builder, and employer dashboard.",
    techStack: ["React.js", "Node.js", "MongoDB", "AI/ML", "Elasticsearch"],
    role: "Full-Stack Developer",
    category: "Job Portal",
    link: "https://gulfjob360.com"
  },
  {
    title: "Yougoz",
    description: "Service booking platform for beauty salons, gyms, and fitness centers with subscription-based revenue model.",
    techStack: ["React.js", "Node.js", "Stripe", "Calendar API", "SMS API"],
    role: "Full-Stack Developer",
    category: "Service Booking"
  },
  {
    title: "Boost Summit Crew",
    description: "Analytics dashboard with Google Analytics integration, subscription model, chat app, and task management.",
    techStack: ["React.js", "Node.js", "Google Analytics API", "Stripe", "WebSocket"],
    role: "Full-Stack Developer",
    category: "Analytics",
    link: "https://boost.summitcrew.com"
  },
  {
    title: "Town Town",
    description: "Local community platform for events, dining, entertainment, news, and local services discovery.",
    techStack: ["React.js", "Node.js", "MongoDB", "Google Maps", "Push Notifications"],
    role: "Full-Stack Developer",
    category: "Community"
  },
  {
    title: "Myron App",
    description: "E-commerce platform with Firebase integration, blog features, Stripe checkout, and order tracking.",
    techStack: ["React.js", "Firebase", "Stripe", "Blog CMS", "Analytics"],
    role: "Full-Stack Developer",
    category: "E-commerce"
  },
  {
    title: "AR Face App",
    description: "Augmented reality web app for video effects including glasses, necklaces, masks, and earrings.",
    techStack: ["React.js", "WebRTC", "AR.js", "TensorFlow.js", "WebGL"],
    role: "Frontend Developer",
    category: "AR/VR",
    link: "https://arapp-one.vercel.app/"
  },
  {
    title: "Circul8",
    description: "Professional networking platform similar to LinkedIn for connecting professionals and companies.",
    techStack: ["React.js", "Node.js", "MongoDB", "Elasticsearch", "Email API"],
    role: "Full-Stack Developer",
    category: "Networking",
    link: "https://circul8.me"
  },
  {
    title: "Movers One",
    description: "Bus ticket booking platform with route selection, seat booking, and payment processing.",
    techStack: ["React.js", "Node.js", "Payment Gateway", "Google Maps", "SMS"],
    role: "Full-Stack Developer",
    category: "Transportation",
    link: "https://movers-one.vercel.app"
  },
  {
    title: "Infinite Tech",
    description: "Call center data management system with Salesforce integration and performance analytics.",
    techStack: ["React.js", "Salesforce API", "Node.js", "Analytics", "CRM"],
    role: "Full-Stack Developer",
    category: "CRM"
  },
  {
    title: "SPS Fulfillment",
    description: "E-commerce fulfillment platform with inventory management and Firebase-powered checkout system.",
    techStack: ["React.js", "Firebase", "Inventory API", "Stripe", "Analytics"],
    role: "Full-Stack Developer",
    category: "E-commerce",
    link: "https://spsfulfillment.com/"
  }
];

// AI/ML Projects
const aiMlProjects = [
  {
    title: "Intelligent Chatbot Platform",
    description: "Advanced chatbot system with NLP, context awareness, and multi-language support for customer service.",
    techStack: ["Python", "FastAPI", "OpenAI API", "LangChain", "PostgreSQL"],
    role: "AI/ML Engineer",
    category: "Conversational AI"
  },
  {
    title: "RAG Document Assistant",
    description: "Retrieval-Augmented Generation system for intelligent document querying and knowledge extraction.",
    techStack: ["Python", "LangChain", "ChromaDB", "OpenAI", "Streamlit"],
    role: "AI/ML Engineer",
    category: "Knowledge Management"
  },
  {
    title: "Voice Agent System",
    description: "AI-powered voice agents for automated customer support with speech-to-text and text-to-speech.",
    techStack: ["Python", "Whisper API", "ElevenLabs", "FastAPI", "WebSocket"],
    role: "AI/ML Engineer",
    category: "Voice AI"
  },
  {
    title: "n8n Workflow Automation",
    description: "Complex workflow automation system integrating multiple APIs and services for business process optimization.",
    techStack: ["n8n", "Python", "REST APIs", "Webhooks", "Database"],
    role: "Automation Engineer",
    category: "Process Automation"
  },
  {
    title: "Model Fine-tuning Pipeline",
    description: "Custom model fine-tuning pipeline for domain-specific AI applications with performance monitoring.",
    techStack: ["Python", "Transformers", "PyTorch", "MLflow", "Docker"],
    role: "ML Engineer",
    category: "Model Training"
  },
  {
    title: "Agentic AI System",
    description: "Multi-agent AI system capable of autonomous task execution and decision-making processes.",
    techStack: ["Python", "LangGraph", "OpenAI", "Redis", "FastAPI"],
    role: "AI Engineer",
    category: "Autonomous AI"
  }
];

const ProjectCard: React.FC<{
  project: any;
  index: number;
  icon: React.ReactNode;
}> = ({ project, index, icon }) => {
  const getTechIcon = (tech: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'React.js': <div className="w-2 h-2 bg-gray-600 rounded-full" />,
      'React Native': <FaMobile className="text-gray-600" />,
      'Node.js': <SiNodedotjs className="text-gray-600" />,
      'Python': <FaPython className="text-gray-600" />,
      'FastAPI': <SiFastapi className="text-gray-600" />,
      'Django': <SiDjango className="text-gray-600" />,
      'Flask': <SiFlask className="text-gray-600" />,
      'AWS': <FaAws className="text-gray-600" />,
    };
    return iconMap[tech] || <span className="w-2 h-2 bg-gray-400 rounded-full" />;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700"
    >
      <div className="p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="bg-gray-900 dark:bg-gray-100 p-3 rounded-xl text-gray-100 dark:text-gray-900">
            {icon}
          </div>
          <span className="text-xs font-medium px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300">
            {project.category}
          </span>
        </div>
        
        <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
          {project.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed">
          {project.description}
        </p>
        
        <div className="mb-6">
          <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-3 tracking-wide">TECH STACK</p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech: string, techIndex: number) => (
              <div
                key={techIndex}
                className="flex items-center space-x-1 px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-lg text-xs border border-gray-200 dark:border-gray-600"
              >
                
                {getTechIcon(tech)}
                <span className="text-gray-700 dark:text-gray-300 font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 tracking-wide">ROLE</p>
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{project.role}</p>
          </div>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              <FiExternalLink size={16} />
              <span className="text-sm font-medium">View</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 dark:bg-gray-900 bg-gray-50 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="md:text-5xl text-3xl font-bold mb-6 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Showcasing full-stack development expertise across web, mobile, and AI/ML domains
          </p>
        </div>

        {/* React Native Projects */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center mb-12"
          >
            <div className="bg-gray-900 dark:bg-gray-100 p-4 rounded-xl mr-6">
              <FaMobile className="text-2xl text-gray-100 dark:text-gray-900" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
                Mobile Applications
              </h3>
              <p className="text-gray-600 dark:text-gray-300">React Native applications with native performance</p>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reactNativeProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                icon={<FaMobile />}
              />
            ))}
          </div>
        </div>

        {/* Web & Full-Stack Projects */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center mb-12"
          >
            <div className="bg-gray-900 dark:bg-gray-100 p-4 rounded-xl mr-6">
              <FaGlobe className="text-2xl text-gray-100 dark:text-gray-900" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
                Web & Full-Stack Applications
              </h3>
              <p className="text-gray-600 dark:text-gray-300">Scalable web applications with modern technologies</p>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                icon={<FaGlobe />}
              />
            ))}
          </div>
        </div>

        {/* AI/ML Projects */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center mb-12"
          >
            <div className="bg-gray-900 dark:bg-gray-100 p-4 rounded-xl mr-6">
              <FaBrain className="text-2xl text-gray-100 dark:text-gray-900" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
                AI/ML & Automation Projects
              </h3>
              <p className="text-gray-600 dark:text-gray-300">Intelligent systems and automation solutions</p>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiMlProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                icon={<FaBrain />}
              />
            ))}
          </div>
        </div>

        {/* Project Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gray-900 dark:bg-gray-100 rounded-2xl p-12 text-gray-100 dark:text-gray-900 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-8">Project Impact</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
              <div className="text-sm md:text-base opacity-80">Total Projects</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">10</div>
              <div className="text-sm md:text-base opacity-80">Mobile Apps</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">40</div>
              <div className="text-sm md:text-base opacity-80">Web Applications</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">15</div>
              <div className="text-sm md:text-base opacity-80">AI/ML Solutions</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;