import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const servicesList = [
    {
        number: "01",
        title: "Chiropractic Adjustments",
        description: "Spinal correction and alignment therapy to ensure optimal nervous system function and biomechanical balance.",
        image: "/Chiropractic Adjustments.jpg"
    },
    {
        number: "02",
        title: "Osteopathy",
        description: "Holistic musculoskeletal treatment focusing on the interconnectedness of your body's systems for comprehensive healing.",
        image: "/Osteopathy.jpg"
    },
    {
        number: "03",
        title: "Rehabilitation Therapy",
        description: "Customized strengthening, stretching, and mobility programs to solidify your recovery and prevent future injuries.",
        image: "/Rehabilitation Therapy.jpg"
    }
];

const Services = () => {
    return (
        <section id="services" className="py-24 bg-slate-900 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16">
                    <div className="max-w-2xl">
                        <h2 className="text-accent font-bold tracking-wide uppercase mb-2">Core Treatments</h2>
                        <h3 className="text-4xl md:text-5xl font-extrabold mb-4">Start Your Recovery Journey Today</h3>
                    </div>
                    <button className="hidden md:flex items-center space-x-2 text-white hover:text-accent font-semibold transition-colors">
                        <span>View All Therapies</span>
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>

                <div className="space-y-12">
                    {servicesList.map((service, index) => (
                        <motion.div
                            key={service.number}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 group ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                        >

                            {/* Image Side */}
                            <div className="w-full lg:w-1/2 relative">
                                {/* Big Faded Number Behind Image */}
                                <div className={`absolute -top-16 ${index % 2 !== 0 ? '-right-8' : '-left-8'} text-[180px] font-black text-slate-800/40 select-none z-0 tracking-tighter transition-transform duration-700 group-hover:-translate-y-4`}>
                                    {service.number}
                                </div>

                                <div className="relative z-10 rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
                                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            </div>

                            {/* Text Side */}
                            <div className="w-full lg:w-1/2 relative z-20">
                                <span className="text-accent text-xl font-bold mb-4 block">{service.number}</span>
                                <h4 className="text-3xl md:text-4xl font-bold mb-6">{service.title}</h4>
                                <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-lg">
                                    {service.description}
                                </p>
                                <button className="inline-flex items-center justify-center px-6 py-3 border border-slate-700 rounded-lg font-medium text-white hover:bg-white hover:text-slate-900 transition-colors duration-300">
                                    Discover More
                                </button>
                            </div>

                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Services;
