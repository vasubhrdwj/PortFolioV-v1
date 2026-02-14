import { motion } from "framer-motion";

const skills = [
  { name: "C++", level: "Advanced" },
  { name: "Python", level: "Advanced" },
  { name: "JavaScript", level: "Advanced" },
  { name: "FastAPI", level: "Advanced" },
  { name: "React", level: "Intermediate" },
  { name: "Node.js", level: "Intermediate" },
  { name: "Next.js", level: "Intermediate" },
  { name: "MySQL / PostgreSQL", level: "Advanced" },
  { name: "Docker", level: "Intermediate" },
  { name: "OAuth 2.0 / SCIM", level: "Expert" },
  { name: "Microservices", level: "Advanced" },
  { name: "Solidity / Web3", level: "Intermediate" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
        >
          My Skills
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-700 hover:border-cyan-500 transition-colors duration-300 flex flex-col items-center justify-center h-full"
            >
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              <p className="text-sm text-slate-400">{skill.level}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
