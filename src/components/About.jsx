

import { motion } from "framer-motion";

import dp from "../assets/WhatsappDp_July2024.jpg";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, 
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  // Animation variants for child elements for a consistent fade-in-up effect
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 sm:px-10 py-24
                 bg-gradient-to-br from-slate-900 via-gray-900 to-black
                 text-slate-200 font-sans"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-4xl flex flex-col items-center text-center space-y-8">
        
        {/* Profile Picture with a subtle glow effect */}
        <motion.div
          className="relative group"
          variants={itemVariants}
        >
          <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur-lg opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <img
            src={dp}
            alt="Vasu Bhardwaj"
            className="relative w-40 h-40 rounded-full object-cover border-4 border-slate-800 shadow-xl"
            onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/200x200/2C3E50/E0E0E0?text=Error'; }}
          />
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-400"
          variants={itemVariants}
        >
          About Me
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl leading-relaxed text-slate-300 max-w-2xl"
          variants={itemVariants}
        >
          Hey! 👋 I'm a passionate developer who loves building web apps and exploring
          new technologies. I thrive on solving complex problems and learning something new every day.
          When I'm not coding, you can find me at the gym or tackling challenges on LeetCode.
          I'm always excited to connect with like-minded people, so feel free to reach out!
        </motion.p>

        {/* Social Links */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 pt-4"
          variants={itemVariants}
        >
          <a
            href="https://github.com/vasubhrdwj"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 text-lg font-semibold text-slate-200 bg-slate-800/50 border border-slate-700 rounded-lg hover:bg-slate-700/80 hover:text-white transition-all duration-300"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/vasubhardwajind/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 text-lg font-semibold text-slate-200 bg-slate-800/50 border border-slate-700 rounded-lg hover:bg-slate-700/80 hover:text-white transition-all duration-300"
          >
            LinkedIn
          </a>
          <a
            href="https://leetcode.com/u/vasubhrdwj/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 text-lg font-semibold text-slate-200 bg-slate-800/50 border border-slate-700 rounded-lg hover:bg-slate-700/80 hover:text-white transition-all duration-300"
          >
            LeetCode
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
