import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import userProjects from "../data/projects-data";


const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-5 w-5"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-5 w-5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
);


const Projects = () => {
  // State to track the currently selected project, defaults to the first one.
  const [selectedProject, setSelectedProject] = useState(userProjects[0]);

  return (
    <motion.section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center px-6 sm:px-10 py-24
                 bg-gradient-to-br from-black via-gray-900 to-slate-900
                 text-slate-200 font-sans"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-7xl w-full mx-auto flex flex-col items-center text-center space-y-12">
        <motion.h2
          className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-400 pb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>

        {/* Project Titles - Act as tabs */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 mb-8">
            {userProjects.map((project) => (
                <motion.button
                    key={project.title}
                    onClick={() => setSelectedProject(project)}
                    className={`px-5 py-2 text-md font-semibold rounded-lg transition-all duration-300 border-2
                                ${selectedProject.title === project.title
                                    ? 'border-cyan-500 bg-cyan-500/10 text-cyan-300'
                                    : 'border-transparent text-slate-400 hover:text-white'
                                }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {project.title}
                </motion.button>
            ))}
        </div>

        {/* Selected Project Details View */}
        <div className="w-full max-w-4xl min-h-[380px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedProject.title} // Crucial for AnimatePresence to detect changes
              className="bg-slate-800/40 border border-slate-700/80 rounded-xl shadow-lg
                         p-8 flex flex-col text-left w-4/5 mx-auto mt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <h3 className="text-3xl font-bold text-slate-100 mb-4">{selectedProject.title}</h3>
              <p className="text-slate-300 flex-grow mb-6 text-lg min-h-[84px]">{selectedProject.description}</p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                {selectedProject.technologies.map((tech, i) => (
                  <span key={i} className="bg-cyan-900/50 text-cyan-200 text-sm font-medium px-4 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex items-center space-x-6">
                <a
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-slate-200 hover:text-cyan-400 transition-colors duration-300 font-semibold text-lg"
                >
                  <GitHubIcon />
                  GitHub
                </a>
                <a
                  href={selectedProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-slate-200 hover:text-cyan-400 transition-colors duration-300 font-semibold text-lg"
                >
                  <ExternalLinkIcon />
                  Live Demo
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;

