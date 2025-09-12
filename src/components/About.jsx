import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      className="min-h-screen flex items-center justify-center px-10 py-20 bg-slate-800 text-gray-200"
      initial={{ opacity: 0, y: 50 }}       // start slightly faded & moved down
      whileInView={{ opacity: 1, y: 0 }}   // fade in + move up when in view
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}            // animate only the first time you scroll
    >
      <div className="max-w-3xl text-center space-y-6">
        <h2 className="text-4xl font-extrabold">About Me</h2>
        <p className="text-lg leading-relaxed text-gray-300">
            Hey! 👋 I'm a passionate developer who loves building web apps and exploring
            new technologies. I love solving problems and learning something new every day.
            When I'm not working, you can find me at the gym or grinding leetcode.
            I'm always excited to connect with like-minded people, so feel free to reach out!
        </p>
      </div>
    </motion.section>
  );
};

export default About;