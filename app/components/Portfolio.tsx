"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useMotionTemplate, useMotionValue, motion, animate } from 'framer-motion';
import invento from './projectsImage/Invento.jpg';
import bytetune from './projectsImage/Napster.jpg';
import querytalk from './projectsImage/QueryTalk.jpg';
import loopmit from './projectsImage/LoopMIT-GUI.jpg';

const projects = [
  { id: 1, year: 2025, title: "Invento", description: "A web application for managing inventory.", image: invento },
  { id: 2, year: 2025, title: "ByteTune", description: "An old style music player", image: bytetune },
  { id: 3, year: 2025, title: "QueryTalk", description: "A web application to convert text to speech to SQL query", image: querytalk },
  { id: 4, year: 2024, title: "LoopMIT GUI", description: "A GUI to control LoopMIT Pod", image: loopmit }
];

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [isMobile, setIsMobile] = useState(false);

  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    // Animate background
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror"
    });

    // Detect screen size
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`;

  return (
    <motion.section
      style={{ backgroundImage }}
      id="portfolio"
      className="min-h-screen flex flex-col justify-center text-white px-4 py-20 sm:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 items-start gap-12">
        <div>
          <h2 className="text-6xl font-bold mb-10">
            Selected <span className="text-gray-400">Projects</span>
          </h2>

          {projects.map((project) => (
            <div
              key={project.id}
              className="cursor-pointer mb-8 group"
              onClick={() => isMobile && setSelectedProject(project)}
              onMouseEnter={() => !isMobile && setSelectedProject(project)}
            >
              <p className="text-gray-400 text-lg mb-2">{project.year}</p>
              <h3 className={`text-3xl font-semibold group-hover:text-gray-400 transition-colors
                ${selectedProject.id === project.id ? 'text-gray-200' : ''} duration-300`}>
                {project.title}
              </h3>

              {selectedProject.id === project.id && (
                <>
                  <div className="border-b-2 border-gray-200 my-4"></div>
                  <div className="text-gray-400 transition-all duration-500 ease-in-out">
                    {project.description}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        <motion.div
          key={selectedProject.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={selectedProject.image}
            alt={selectedProject.title}
            className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out"
            width={800}
            height={1000}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};
