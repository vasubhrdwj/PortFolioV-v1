import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      className="min-h-screen flex items-center justify-center px-10 py-24
                 bg-[linear-gradient(to_right,#2C5364,#203A43,#0F2027)]
                 text-green-100"
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-3xl flex flex-col items-center text-center space-y-10">
        
        <motion.div
          className="w-40 h-40 rounded-4xl bg-gray-700 border-4 border-teal-700 shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
            <img
        src="src/assets/WhatsappDp_July2024.jpg"
        alt="Your Name"
        className="w-full h-full rounded-4xl object-cover"
        />
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="text-5xl font-extrabold text-teal-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-lg leading-relaxed text-green-100/90 max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Hey! 👋 I'm a passionate developer who loves building web apps and exploring
          new technologies. I love solving problems and learning something new every day.
          When I'm not working, you can find me at the gym or grinding LeetCode.
          I'm always excited to connect with like-minded people, so feel free to reach out!
        </motion.p>

        <motion.div
          className="flex space-x-10 mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/vasubhrdwj"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-200 hover:text-white transition text-2xl font-semibold"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/vasubhardwajind/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-200 hover:text-white transition text-2xl font-semibold"
          >
            LinkedIn
          </a>
          <a
            href="https://leetcode.com/u/vasubhrdwj/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-200 hover:text-white transition text-2xl font-semibold"
          >
            Leetcode
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;