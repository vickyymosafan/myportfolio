"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Search, ChevronLeft } from "lucide-react";


const allProjects = [
  {
    title: "Neon Dreams E-commerce",
    description:
      "A futuristic e-commerce platform with neon aesthetics and smooth animations.",
    technologies: ["React", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmVvbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Quantum Dashboard",
    description:
      "A data visualization dashboard with particle effects and real-time updates.",
    technologies: ["Vue.js", "D3.js", "Express"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGFzaGJvYXJkfGVufDB8fDB8fHww",
  },
  {
    title: "Mindful Task Manager",
    description:
      "A zen-inspired task management app with ambient sounds and breathing exercises.",
    technologies: ["React Native", "Firebase"],
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFzayUyMG1hbmFnZXJ8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Weather Oasis PWA",
    description:
      "A progressive web app that transforms weather data into immersive visual experiences.",
    technologies: ["React", "TypeScript", "OpenWeather API"],
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VhdGhlciUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "GraphQL API Explorer",
    description:
      "An interactive tool for exploring and testing GraphQL APIs with real-time documentation.",
    technologies: ["Node.js", "GraphQL", "Apollo"],
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBpfGVufDB8fDB8fHww",
  },
  {
    title: "Svelte Micro-Animations",
    description:
      "A collection of reusable micro-animations built with Svelte for enhanced user experiences.",
    technologies: ["Svelte", "Animation", "CSS"],
    image: "https://images.unsplash.com/photo-1550063873-ab792950096b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbWF0aW9ufGVufDB8fDB8fHww",
  },
  {
    title: "Next.js Blog Platform",
    description:
      "A high-performance blog platform with server-side rendering and optimized for SEO.",
    technologies: ["Next.js", "React", "MongoDB"],
    image: "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Docker DevOps Pipeline",
    description:
      "A comprehensive DevOps pipeline using Docker for containerization and automated deployments.",
    technologies: ["Docker", "Jenkins", "Kubernetes"],
    image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGV2b3BzfGVufDB8fDB8fHww",
  },
  {
    title: "Angular Stock Tracker",
    description:
      "Real-time stock tracking application with interactive charts and personalized watchlists.",
    technologies: ["Angular", "RxJS", "D3.js"],
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RvY2slMjBtYXJrZXR8ZW58MHx8MHx8fDA%3D",
  },
];

const technologies = [
  "All",
  "React",
  "Vue.js",
  "Angular",
  "Node.js",
  "Next.js",
  "Svelte",
  "TypeScript",
  "GraphQL",
  "Docker",
];

export function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProjects, setFilteredProjects] = useState(allProjects);
  const [isNavbarHovered, setIsNavbarHovered] = useState(false);

  useEffect(() => {
    const filtered = allProjects.filter(
      (project) =>
        (activeFilter === "All" ||
          project.technologies.includes(activeFilter)) &&
        (project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          project.technologies.some((tech) =>
            tech.toLowerCase().includes(searchTerm.toLowerCase())
          ))
    );
    setFilteredProjects(filtered);
  }, [activeFilter, searchTerm]);

  return (
    <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] text-white min-h-screen font-sans">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${isNavbarHovered ? 'bg-[#16213e] bg-opacity-90' : 'bg-transparent'}`}
        onMouseEnter={() => setIsNavbarHovered(true)}
        onMouseLeave={() => setIsNavbarHovered(false)}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#4ecca3] font-bold text-3xl"
          >
            <Image src="/white_on_trans.png" alt="vickymosafan Logo" width={70} height={70} />
          </motion.div>
          <div className="flex justify-center flex-grow">
            <Link href="/" passHref>
              <motion.a
                className="text-sm font-bold mx-4 hover:text-[#4ecca3] transition-colors text-white"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                HOME
              </motion.a>
            </Link>
            <motion.span
              className="text-sm font-bold mx-4 text-[#4ecca3]"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              PROJECTS
            </motion.span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: 'cover', 
        backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1a1a2e] z-0"></div>
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1a1a2e] to-transparent z-0"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold mb-4 font-serif text-[#4ecca3]"
          >
            All Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl mb-8 max-w-2xl mx-auto font-light text-gray-300"
          >
            Explore my portfolio of web development projects
          </motion.p>
        </div>
      </section>

      {/* Project Filters */}
      <section className="py-12 px-6 bg-[#1a1a2e]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center mb-8">
            {technologies.map((tech) => (
              <motion.button
                key={tech}
                onClick={() => setActiveFilter(tech)}
                className={`m-2 px-4 py-2 rounded-full ${
                  activeFilter === tech
                    ? "bg-[#4ecca3] text-[#1a1a2e]"
                    : "bg-[#16213e] text-gray-300"
                } font-medium transition-all`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {tech}
              </motion.button>
            ))}
          </div>
          <div className="relative mb-8">
            <motion.input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 bg-[#16213e] text-white rounded-full focus:outline-none focus:ring-2 focus:ring-[#4ecca3] font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </section>

      {/* Project Grid */}
      <section className="py-12 px-6 bg-[#16213e]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#1a1a2e] rounded-lg overflow-hidden shadow-lg"
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 font-sans text-[#4ecca3]">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4 font-light">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-[#4ecca3] bg-opacity-20 text-[#4ecca3] px-2 py-1 rounded font-light"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-12 px-6 bg-[#1a1a2e]">
        <div className="max-w-7xl mx-auto text-center">
          <Link href="/" passHref>
            <motion.a
              className="inline-flex items-center bg-[#4ecca3] text-[#1a1a2e] px-8 py-3 rounded-full font-medium text-lg hover:bg-opacity-90 transition-all"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <ChevronLeft className="mr-2" />
              Back to Home
            </motion.a>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-[#1a1a2e]">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-gray-400 font-light">
            © 2024 Vicky Mosafan. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
