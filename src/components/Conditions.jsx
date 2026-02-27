import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const conditionsList = [
    { title: "Neck Pain", image: "/Neck Pain.jpg" },
    { title: "Back Pain", image: "/Back Pain.jpg" },
    { title: "Sciatica", image: "/Sciatica.webp" },
    { title: "Joint Pain", image: "/Joint Pain.jpg" },
    { title: "Headaches & Migraines", image: "/Headaches & Migraines copy.jpg" },
    { title: "Post-Surgical Rehab", image: "/Post-Surgical Rehab.jpeg" },
    { title: "Sports Injuries", image: "/Sports Injuries copy.jpg" },
    { title: "Chronic Pain", image: "/Chronic Pain.jpg" },
];

const Conditions = () => {
    return (
        <section id="conditions" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h2 className="text-primary font-bold tracking-wide uppercase mb-2">Areas of Practice</h2>
                    <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Your Pain. Our Expertise.</h3>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        We specialize in treating a wide range of musculoskeletal conditions with personalized care plans.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {conditionsList.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5 }}
                            style={{ transformStyle: "preserve-3d" }}
                            className="group relative h-80 rounded-2xl overflow-hidden shadow-lg cursor-pointer transform-gpu transition-all duration-300"
                        >
                            {/* Radial glow background effect */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/80 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-multiply"></div>

                            {/* Default overlay */}
                            <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/60 transition-colors duration-300 z-10"></div>

                            {/* Background Image */}
                            <img
                                src={item.image}
                                alt={item.title}
                                className="absolute inset-0 w-full h-full object-cover origin-center transform group-hover:scale-110 transition-transform duration-700"
                            />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 p-6 z-20 w-full translate-z-10 text-white">
                                <h4 className="text-2xl font-bold mb-2 tracking-wide block translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.title}</h4>
                                <div className="flex items-center space-x-2 text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-3 pt-3 border-t border-white/20">
                                    <span className="font-semibold text-sm tracking-widest uppercase">Learn More</span>
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Conditions;
