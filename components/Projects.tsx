'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

function Projects() {
  const [activeProject, setActiveProject] = useState(0);
  
  const projects = [
    { 
      name: "Amazon Clone", 
      content: "I developed an Amazon 2.0 Clone using Next.js, showcasing a comprehensive e-commerce solution. Key features include a secure Log In and Log Out Authentication Flow using NextAuth, dynamic Add to Basket functionality akin to Amazon, and a responsive Basket page for managing orders. Integration of Stripe facilitated seamless payments, while Cloud Firestore managed order details efficiently. The UI was crafted with Tailwind CSS for responsiveness, and deployment was executed flawlessly on Vercel.",
      id: "amazon-clone",
      image: "https://i.postimg.cc/d3FfzHX3/hjhh.png",
      technologies: [
        { name: "Next.js", logo: "https://cdn.worldvectorlogo.com/logos/next-js.svg" },
        { name: "Tailwind CSS", logo: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg" },
        { name: "JavaScript", logo: "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg" },
        { name: "Firebase", logo: "https://cdn.worldvectorlogo.com/logos/firebase-2.svg" },
        { name: "Stripe", logo: "https://cdn.worldvectorlogo.com/logos/stripe-2.svg" }
      ],
      demoLink: "#",
      codeLink: "#"
    },
    { 
      name: "Airbnb Clone", 
      content: "I developed an Airbnb 2.0 clone using Next.js, showcasing advanced features such as a sleek Date and Calendar Functionality for seamless booking experiences, inspired by Airbnb's interface. Additionally, the project highlights a robust Search Functionality that delivers instant listing results, leveraging Next.js for optimized performance.",
      id: "airbnb-clone",
      image: "https://i.postimg.cc/nr7DQTc4/aa.png",
      technologies: [
        { name: "Next.js", logo: "https://cdn.worldvectorlogo.com/logos/next-js.svg" },
        { name: "Tailwind CSS", logo: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg" },
        { name: "JavaScript", logo: "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg" },
        { name: "Firebase", logo: "https://cdn.worldvectorlogo.com/logos/firebase-2.svg" },
        { name: "Mapbox", logo: "https://cdn.worldvectorlogo.com/logos/mapbox-2.svg" }
      ],
      demoLink: "#",
      codeLink: "#"
    },
    { 
      name: "Netflix Clone", 
      content: "My Netflix 2.0 Clone, crafted with React.js, features a robust authentication system powered by Google for secure user interactions. The Home Screen captures the essence of Netflix, presenting an array of movies in a visually captivating layout. A dedicated Subscription page allows seamless management of monthly subscriptions, with Stripe facilitating smooth checkout flows and Firebase extensions integrating recurring payments.",
      id: "netflix-clone",
      image: "https://i.postimg.cc/0Q9SJ7KF/bb.png",
      technologies: [
        { name: "React", logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
        { name: "CSS", logo: "https://cdn.worldvectorlogo.com/logos/css-3.svg" },
        { name: "JavaScript", logo: "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg" },
        { name: "Firebase", logo: "https://cdn.worldvectorlogo.com/logos/firebase-2.svg" }
      ],
      demoLink: "#",
      codeLink: "#"
    },
    { 
      name: "Booking.com Clone", 
      content: "I created a Booking.com clone featuring a comprehensive hotel reservation system. The project includes advanced filters for hotel searches, a user-friendly booking interface, and a secure payment system. Utilizing Next.js for performance and Tailwind CSS for responsive design, this project demonstrates my ability to build complex, feature-rich applications with modern web technologies.",
      id: "booking-clone",
      image: "https://i.postimg.cc/tCrH0bzx/mm.png",
      technologies: [
        { name: "Next.js", logo: "https://cdn.worldvectorlogo.com/logos/next-js.svg" },
        { name: "Tailwind CSS", logo: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg" },
        { name: "JavaScript", logo: "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg" },
        { name: "Firebase", logo: "https://cdn.worldvectorlogo.com/logos/firebase-2.svg" }
      ],
      demoLink: "#",
      codeLink: "#"
    },
  ];

  // Project navigation handlers
  const nextProject = () => {
    setActiveProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };
  
  const prevProject = () => {
    setActiveProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  // Pagination indicator component
  const PaginationDots = () => (
    <div className="flex space-x-2 mt-6">
      {projects.map((_, idx) => (
        <button
          key={idx}
          onClick={() => setActiveProject(idx)}
          className={`h-3 w-3 rounded-full transition-all duration-300 ${
            idx === activeProject ? 'bg-[#f7ab0a]' : 'bg-gray-400'
          }`}
          aria-label={`Go to project ${idx + 1}`}
        />
      ))}
    </div>
  );

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left lg:flex-row 
      max-w-full justify-evenly mx-auto items-center z-0 px-4 md:px-10"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="w-full flex flex-col items-center justify-center mt-24 md:mt-32">
        {/* Navigation arrows */}
        <div className="hidden md:flex absolute left-10 right-10 top-1/2 transform -translate-y-1/2 justify-between z-30">
          <button 
            onClick={prevProject} 
            className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
            aria-label="Previous project"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={nextProject} 
            className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
            aria-label="Next project"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Project display area */}
        <div className="relative w-full flex overflow-x-hidden snap-x snap-mandatory z-20">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className={`w-full flex-shrink-0 snap-center flex flex-col md:flex-row 
                items-center justify-center p-5 md:p-10 space-y-8 md:space-y-0 md:space-x-8 h-[70vh] 
                transition-all duration-500 transform ${i === activeProject ? 'opacity-100 scale-100' : 'opacity-0 scale-95 hidden'}`}
            >
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="flex-shrink-0 w-full md:w-1/2 flex justify-center"
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg border border-gray-200 p-4 bg-white/5 backdrop-blur-sm">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-auto object-cover rounded"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                    <div className="flex space-x-4">
                      <a href={project.demoLink} className="px-4 py-2 bg-[#f7ab0a] text-black font-medium rounded hover:bg-[#f7ab0a]/80 transition-colors">
                        Live Demo
                      </a>
                      <a href={project.codeLink} className="px-4 py-2 bg-gray-800 text-white font-medium rounded hover:bg-gray-700 transition-colors">
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6 px-0 md:px-4 w-full md:w-1/2"
              >
                <h4 className="text-2xl md:text-3xl font-bold">
                  <span className="text-[#f7ab0a]">{i + 1}. </span>
                  {project.name}
                </h4>

                <div className="flex flex-wrap items-center gap-3">
                  {project.technologies.map((tech, index) => (
                    <div 
                      key={index} 
                      className="flex items-center bg-gray-800/30 px-3 py-1 rounded-full"
                      title={tech.name}
                    >
                      <img
                        className="h-5 w-5 mr-2"
                        src={tech.logo}
                        alt={tech.name}
                      />
                      <span className="text-xs font-medium">{tech.name}</span>
                    </div>
                  ))}
                </div>
                
                <div className="bg-black/20 p-4 rounded-lg backdrop-blur-sm">
                  <p className="text-sm md:text-base">
                    {project.content}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Mobile navigation */}
        <div className="flex md:hidden justify-center mt-6 space-x-6">
          <button 
            onClick={prevProject} 
            className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md"
          >
            Previous
          </button>
          <button 
            onClick={nextProject} 
            className="bg-[#f7ab0a] hover:bg-[#f7ab0a]/80 text-black px-4 py-2 rounded-md"
          >
            Next
          </button>
        </div>

        {/* Pagination dots */}
        <PaginationDots />
      </div>

      {/* Background decoration */}
      <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12" />
    </motion.section>
  );
}

export default Projects;
