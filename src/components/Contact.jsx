import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle the form submission, e.g., sending an email via EmailJS or backend API.
        console.log("Form Data Sent:", formData);
        alert("Thanks for reaching out! I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 to-black text-white">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                        Get In Touch
                    </h2>
                    <p className="text-slate-400 text-lg">
                        Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    onSubmit={handleSubmit}
                    className="bg-slate-800/50 p-8 rounded-2xl shadow-xl border border-slate-700/50 backdrop-blur-sm"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full bg-slate-900/80 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full bg-slate-900/80 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                placeholder="john@example.com"
                            />
                        </div>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="5"
                            className="w-full bg-slate-900/80 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                            placeholder="Your message..."
                        ></textarea>
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transform transition-transform hover:scale-105"
                        >
                            Send Message
                        </button>
                    </div>
                </motion.form>

                <div className="mt-12 text-center text-slate-500 text-sm">
                    <p className="mb-2">Or email me directly at</p>
                    <a href="mailto:vasubhrdwj@gmail.com" className="text-purple-400 hover:underline text-lg">
                        vasubhrdwj@gmail.com
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
