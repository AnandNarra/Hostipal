import React from 'react';
import { motion } from 'framer-motion';
import { Phone, CalendarCheck, ShieldCheck, MapPin, Award, Users } from 'lucide-react';

const scrollingImages = [
    "/Chiropractic Adjustments.jpg",
    "/Osteopathy.jpg",
    "/Rehabilitation Therapy.jpg"
];

const Hero = () => {
    return (
        <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">

            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[600px] h-[600px] bg-orange-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">

                    {/* Left: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-6 mb-16 lg:mb-0"
                    >
                        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-50 text-primary mb-6">
                            <ShieldCheck className="w-5 h-5 text-accent" />
                            <span className="text-sm font-semibold tracking-wide uppercase">Trusted Spine Experts</span>
                        </div>

                        <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                            Advanced Spine & Joint Care in <span className="text-primary">Cuttack & Bhubaneswar</span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
                            Restore Movement. Relieve Pain. Reclaim Life. We provide evidence-based Chiropractic and Osteopathy treatments tailored to your recovery.
                        </p>

                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                            <a
                                href="tel:8260229039"
                                className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-bold rounded-xl shadow-lg shadow-blue-500/30 text-white bg-primary hover:bg-blue-700 transition duration-300"
                            >
                                <Phone className="w-5 h-5 mr-2" />
                                Call Now
                            </a>
                            <a
                                href="#contact"
                                className="inline-flex justify-center items-center px-8 py-4 border-2 border-slate-200 text-base font-bold rounded-xl text-slate-700 bg-white hover:border-accent hover:text-accent transition duration-300 shadow-sm"
                            >
                                <CalendarCheck className="w-5 h-5 mr-2" />
                                Book Appointment
                            </a>
                        </div>

                        {/* Trust Badges */}
                        <div className="mt-12 grid grid-cols-2 gap-6 sm:flex sm:space-x-10">
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-primary">5000+</span>
                                <span className="text-sm font-medium text-slate-500 uppercase tracking-widest">Patients Treated</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-primary">2</span>
                                <span className="text-sm font-medium text-slate-500 uppercase tracking-widest">Branch Locations</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Composite Visual Area */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-6 flex flex-col space-y-4"
                    >
                        {/* 1. Horizontal Photo Slider */}
                        <div className="w-full relative overflow-hidden rounded-2xl h-48 sm:h-64 shadow-xl">
                            <motion.div
                                animate={{ x: ["0%", "-50%"] }}
                                transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
                                className="flex h-full"
                            >
                                {[...scrollingImages, ...scrollingImages].map((img, i) => (
                                    <div key={i} className="flex-shrink-0 w-1/2 sm:w-1/3 h-full p-1">
                                        <div className="w-full h-full rounded-xl overflow-hidden shadow-inner border border-white/50">
                                            <img src={img} className="w-full h-full object-cover" alt="Treatment" />
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                            {/* Overlay Gradient */}
                            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-50 to-transparent z-10"></div>
                            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-50 to-transparent z-10"></div>
                        </div>

                        {/* 2. Video Area with Heroic Overlay */}
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video bg-slate-900 border-4 border-white group">
                            <img
                                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"
                                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
                                alt="Chiropractic Care"
                            />
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="absolute inset-0 w-full h-full object-cover opacity-60"
                            >
                                <source src="https://videos.pexels.com/video-files/5327268/5327268-uhd_2560_1440_30fps.mp4" type="video/mp4" />
                            </video>

                            {/* Floating Overlay Info */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                                <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center space-x-3 max-w-[240px]">
                                    <div className="bg-primary/10 p-2 rounded-xl">
                                        <Award className="w-8 h-8 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-slate-900 font-bold leading-tight">Expert Chiropractic</p>
                                        <p className="text-xs text-slate-500">Certified Specialists</p>
                                    </div>
                                </div>
                                <div className="hidden sm:flex bg-accent p-3 rounded-full text-white shadow-lg animate-pulse">
                                    <Users className="w-6 h-6" />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
