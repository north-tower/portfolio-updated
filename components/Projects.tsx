'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

function Projects() {
  const projects = [1, 2, 3, 4];
  const technologies = [1, 2, 3, 4];
 const dishes = [
  { 
    name: "Sushi", 
    price: 12.99,
    id: "1",
    image: "https://images.unsplash.com/photo-1622192308862-8032a315dd16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsJTIwZGlzaGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    technologies: ["https://cdn.worldvectorlogo.com/logos/next-js.svg", "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg", "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg","https://cdn.worldvectorlogo.com/logos/firebase-2.svg","https://cdn.worldvectorlogo.com/logos/stripe-2.svg"]
  },
  { 
    name: "Pizza", 
    price: 9.99,
    id: "2", 
    image: "https://images.unsplash.com/photo-1622192308862-8032a315dd16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsJTIwZGlzaGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    technologies: ["Angular", "Express.js", "MySQL"]
  }
];


  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-out
    text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3
        className="absolute top-24 uppercase tracking-[20px] text-gray-500
       text-2xl"
      >
        Projects
      </h3>
      <div
        className="relative w-full flex overflow-x-scroll
       overflow-y-hidden snap-x snap-mandatory z-20  scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80"
      >
        {dishes.map((project, i) => (
  <div
    className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
    key={i}
  >
    <motion.img
      initial={{ y: -300, opacity: 0 }}
      transition={{ duration: 1.2 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      src="https://i.postimg.cc/7YZJTsr4/yyy.png"
      className="h-[180px]"
      alt=""
    />
    <div className="space-y-10 px-0 md:px-10 max-w-6xl">
      <Link href="/">
        <h4 className="text-xl font-semibold text-center">
          <span className="underline decoration-[#f7ab0a]">
            Case Study {i + 1} of {dishes.length}:
          </span>{' '}
          {project?.name}
        </h4>
      </Link>

      <div className="flex items-center space-x-2 justify-center">
        {project.technologies.map((technology, index) => (
          <img
            key={index}
            className="h-5 w-5"
            src={technology}
            alt={`Logo of ${technology}`}
          />
        ))}
      </div>
      <p className="text-xs text-center md:text-left">
        AIRBNB 2.0 CLONE with NEXT.JS. You'll see the following in this
        build: 👉 A beautiful Date and Calendar Functionality where you
        can book a listing just like Airbnb! 👉 How to build a Search
        Functionality that instantly displays all the listings with the
        speed of Next.js!
      </p>
    </div>
  </div>
))}

      </div>
      <div
        className=" w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px]
        -skew-y-12"
      />
    </motion.div>
  );
}

export default Projects;
