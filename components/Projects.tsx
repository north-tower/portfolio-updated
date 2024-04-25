'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

function Projects() {
  const projects = [1, 2, 3, 4];
  const technologies = [1, 2, 3, 4];

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
        {projects.map((project, i) => (
          <div
            className="w-screen flex-shrink-0 snap-center flex flex-col
            space-y-5 items-center justify-center p-20 md:p-44 h-screen"
            key={i}
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src="https://cdn.sanity.io/images/g86efv0h/production/d14ea956f2f7e69766ae4837c8738032e2772546-667x1000.jpg"
              className="h-[180px]"
              alt=""
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <Link href="/">
                <h4 className="text-4xl font-semibold text-center">
                  <span className="underline decoration-[#f7ab0a]">
                    Case Study {i + 1} of {projects.length}:
                  </span>{' '}
                  project?.titl
                </h4>
              </Link>

              <div className="flex items-center space-x-2 justify-center">
                {technologies.map((technology) => (
                  <img
                    className="h-10 w-10"
                    src="https://cdn.sanity.io/images/g86efv0h/production/5106dd90453602cc4f28088b03ff0b23d770563c-800x800.svg"
                  />
                ))}
              </div>
              <p className="text-lg text-center md:text-left">
                AIRBNB 2.0 CLONE with NEXT.JS. You'll see the following in this
                build: 👉 A beautiful Date and Calendar Functionality where you
                can book a listing just like Airbnb! 👉 How to build a Search
                Functionality that instantly displays all the listings with the
                speed of Next.js! 👉 How to use Tailwind CSS to build a
                beautiful carasoul, loading bars and lots of of good UI / UX
                design implementations! 👉 How to use Mapbox to display the
                exact location of all the listings! 👉 How to finally deploy the
                final build on Vercel!
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
