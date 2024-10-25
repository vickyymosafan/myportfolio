"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const projects = [
  {
    title: "Neon Dreams E-commerce",
    description:
      "A futuristic e-commerce platform with neon aesthetics and smooth animations.",
    technologies: ["React", "Node.js", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmVvbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Quantum Dashboard",
    description:
      "A data visualization dashboard with particle effects and real-time updates.",
    technologies: ["Vue.js", "D3.js", "Express"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGFzaGJvYXJkfGVufDB8fDB8fHww",
  },
  {
    title: "Mindful Task Manager",
    description:
      "A zen-inspired task management app with ambient sounds and breathing exercises.",
    technologies: ["React Native", "Firebase"],
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFzayUyMG1hbmFnZXJ8ZW58MHx8MHx8fDA%3D",
  },
];

const skills = [
  {
    name: "HTML",
    icon: "https://img.icons8.com/color/48/000000/html-5--v1.png",
  },
  { name: "CSS", icon: "https://img.icons8.com/color/48/000000/css3.png" },
  {
    name: "JavaScript",
    icon: "https://img.icons8.com/color/48/000000/javascript--v1.png",
  },
  {
    name: "React",
    icon: "https://img.icons8.com/?size=100&id=voJ15GoZniHZ&format=png&color=000000",
  },
  {
    name: "Vue.js",
    icon: "https://img.icons8.com/?size=100&id=eETV3RNHVrWA&format=png&color=000000",
  },
  {
    name: "Node.js",
    icon: "https://img.icons8.com/color/48/000000/nodejs.png",
  },
  {
    name: "TypeScript",
    icon: "https://img.icons8.com/?size=100&id=HcQEdKCkXUs3&format=png&color=000000",
  },
  {
    name: "GraphQL",
    icon: "https://img.icons8.com/?size=100&id=F7lOirRzQTMs&format=png&color=000000",
  },
];

export function PortfolioComponent() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMounted, setIsMounted] = useState(false);
  const [isNavbarHovered, setIsNavbarHovered] = useState(false);
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    setIsMounted(true);

    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      transition: { repeat: Infinity, duration: 2 },
    });
  }, [controls]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const nextSkill = () => {
    setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
  };

  const prevSkill = () => {
    setCurrentSkillIndex(
      (prevIndex) => (prevIndex - 1 + skills.length) % skills.length
    );
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] text-white min-h-screen font-sans">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
          isNavbarHovered ? "bg-[#16213e] bg-opacity-90" : "bg-transparent"
        }`}
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
            <Image src="/white_on_trans.png" alt="" width={70} height={70} />
          </motion.div>
          <div className="flex justify-center flex-grow">
            {["home", "about", "skills", "projects", "contact"].map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`text-sm font-bold mx-4 hover:text-[#4ecca3] transition-colors ${
                  activeSection === item ? "text-[#4ecca3]" : "text-white"
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {item.toUpperCase()}
              </motion.button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1a1a2e] z-0"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold mb-4 font-serif text-[#4ecca3]"
          >
            Vicky Mosafan
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-4xl font-bold mb-6 font-sans text-white"
          >
            Frontend Developer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl mb-8 max-w-2xl mx-auto font-light text-gray-300"
          >
            Im passionate about creating exceptional digital experiences through
            clean, efficient, and accessible code.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center space-x-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#4ecca3] text-[#1a1a2e] px-8 py-3 rounded-full font-medium text-lg hover:bg-opacity-90 transition-all"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
            </motion.button>
            <motion.a
              href="/path-to-vicky-mosafan-cv.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border border-[#4ecca3] text-[#4ecca3] px-8 py-3 rounded-full font-medium text-lg hover:bg-[#4ecca3] hover:text-[#1a1a2e] transition-all"
            >
              Download CV
            </motion.a>
          </motion.div>
        </div>
        <motion.div
          animate={controls}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => scrollToSection("about")}
        >
          <ChevronDown className="w-12 h-12 text-[#4ecca3] opacity-75" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-[#1a1a2e]">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold mb-16 text-center font-serif text-[#4ecca3] tracking-wide"
          >
            About Me
          </motion.h2>
          <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-12 lg:space-y-0 lg:space-x-16">
            <motion.div
              className="lg:w-1/3"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute -inset-2 bg-[#4ecca3] rounded-lg blur opacity-75 animate-pulse"></div>
                <Image
                  src="/my.jpg"
                  alt="Vicky Mosafan"
                  width={450}
                  height={450}
                  className="rounded-lg relative z-10 object-cover shadow-xl"
                />
              </div>
            </motion.div>
            <motion.div
              className="lg:w-2/3"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.p
                className="mb-6 text-xl font-light text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <span className="text-[#4ecca3] font-semibold text-2xl">
                  Hello!
                </span>{" "}
                Im Vicky Mosafan, a college student passionate about front-end
                development. With a strong foundation in HTML, CSS, and
                JavaScript, Im eager to create intuitive and visually appealing
                user interfaces. I love transforming ideas into interactive,
                responsive designs that enhance user experience.
              </motion.p>
              <motion.p
                className="mb-6 text-xl font-light text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                Currently expanding my knowledge in modern frameworks like{" "}
                <span className="text-[#4ecca3] font-medium">
                  React and Vue.js,
                </span>
                I’m keen to bring my creativity and technical skills{" "}
                <span className="underline decoration-[#4ecca3]">
                  to real-world projects.
                </span>{" "}
                I’m actively seeking internship or junior developer
                opportunities where I can contribute and grow in a dynamic
                environment.
              </motion.p>
              <motion.p
                className="text-xl font-light text-gray-300 leading-relaxed text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <span className="italic text-[#4ecca3]">
                  Lets connect and build something amazing together!
                </span>
                .
              </motion.p>
              <motion.div
                className="mt-10 flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                {["React", "Vue.js", "TypeScript", "Node.js", "GraphQL"].map(
                  (
                    skill // Hapus 'index' karena tidak digunakan
                  ) => (
                    <motion.span
                      key={skill}
                      className="bg-[#4ecca3] text-[#1a1a2e] px-4 py-2 rounded-full text-lg font-medium shadow-lg"
                      whileHover={{
                        scale: 1.1,
                        boxShadow: "0 0 15px rgba(78, 204, 163, 0.5)",
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {skill}
                    </motion.span>
                  )
                )}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-[#16213e]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16 font-serif text-[#4ecca3]">
            My Skills
          </h2>
          <div className="flex items-center justify-center space-x-8">
            <motion.button
              onClick={prevSkill}
              className="text-[#4ecca3] hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-10 h-10" />
            </motion.button>
            <motion.div
              key={currentSkillIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center w-64"
            >
              <div className="w-32 h-32 flex items-center justify-center mb-6 bg-[#1a1a2e] rounded-full p-4">
                <Image
                  src={skills[currentSkillIndex].icon}
                  alt={skills[currentSkillIndex].name}
                  width={64}
                  height={64}
                  className="rounded-full"
                />
              </div>
              <span className="font-semibold text-xl text-[#4ecca3]">
                {skills[currentSkillIndex].name}
              </span>
            </motion.div>
            <motion.button
              onClick={nextSkill}
              className="text-[#4ecca3] hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-10 h-10" />
            </motion.button>
          </div>
          <motion.div
            className="mt-12 flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {skills.map((skill, index) => (
              <motion.span
                key={skill.name}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  index === currentSkillIndex
                    ? "bg-[#4ecca3] text-[#1a1a2e]"
                    : "bg-[#1a1a2e] text-[#4ecca3]"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentSkillIndex(index)}
              >
                {skill.name}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-[#1a1a2e]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center font-serif text-[#4ecca3]">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
                whileTap={{ scale: 0.9 }}
                className="bg-[#16213e] rounded-lg overflow-hidden shadow-lg"
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
                  <p className="text-sm text-gray-400 mb-4  font-light">
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
          <div className="text-center mt-12">
            <Link href="/projects" passHref>
              {" "}
              {/* Perbarui tautan di sini */}
              <motion.a
                className="inline-block bg-[#4ecca3] text-[#1a1a2e] px-8 py-3 rounded-full font-medium text-lg hover:bg-[#3b3b4f] transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Projects
              </motion.a>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-[#16213e] text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center font-serif text-[#4ecca3]">
            Get in Touch
          </h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-400"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full rounded-md bg-[#1a1a2e] border-gray-700 shadow-sm focus:border-[#4ecca3] focus:ring focus:ring-[#4ecca3] focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-400"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full rounded-md bg-[#1a1a2e] border-gray-700 shadow-sm focus:border-[#4ecca3] focus:ring focus:ring-[#4ecca3] focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-400"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md bg-[#1a1a2e] border-gray-700 shadow-sm focus:border-[#4ecca3] focus:ring focus:ring-[#4ecca3] focus:ring-opacity-50"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full bg-[#4ecca3] text-[#1a1a2e] px-4 py-2 rounded-md hover:bg-opacity-90 transition-all font-medium"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            <div className="md:w-1/2">
              <div className="h-full bg-[#1a1a2e] rounded-lg overflow-hidden">
                {/* Replace with an actual map component or embed */}
                <div className="h-full bg-[#1a1a2e] flex items-center justify-center">
                  <span className="text-gray-500">Map Placeholder</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-[#1a1a2e] text-gray-400 font-light">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              © 2024 Vicky Mosafan. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <motion.a
              href="https://github.com/vickymosafan"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              className="text-gray-400 hover:text-[#4ecca3]"
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/vickymosafan"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              className="text-gray-400 hover:text-[#4ecca3]"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://twitter.com/vickymosafan"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              className="text-gray-400 hover:text-[#4ecca3]"
            >
              <Twitter className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="mailto:vicky@mosafan.com"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              className="text-gray-400 hover:text-[#4ecca3]"
            >
              <Mail className="w-6 h-6" />
            </motion.a>
          </div>
        </div>
      </footer>
    </div>
  );
}
