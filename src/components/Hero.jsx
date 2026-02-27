import React from 'react';
import { motion } from 'framer-motion';
import { Phone, CalendarCheck, ShieldCheck, MapPin, Award, Users } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">

            {/* Decorative Background */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[600px] h-[600px] bg-orange-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-7 mb-16 lg:mb-0"
                    >
                        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-50 text-primary mb-6">
                            <ShieldCheck className="w-5 h-5 text-accent" />
                            <span className="text-sm font-semibold tracking-wide uppercase">Trusted Spine Experts</span>
                        </div>

                        <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                            Advanced Spine & Joint Care in <span className="text-primary">Cuttack & Bhubaneswar</span>
                        </h1>

                        <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
                            Restore Movement. Relieve Pain. Reclaim Life. We provide evidence-based Chiropractic and Osteopathy treatments tailored to your recovery.
                        </p>

                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
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
                        <div className="mt-12 grid grid-cols-2 gap-4 sm:flex sm:space-x-8">
                            <div className="flex items-center space-x-2">
                                <Users className="w-6 h-6 text-accent" />
                                <span className="text-sm font-medium text-slate-700">5000+ Patients Treated</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <MapPin className="w-6 h-6 text-accent" />
                                <span className="text-sm font-medium text-slate-700">2 Branch Locations</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Image/Visual Area */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-5 relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] bg-slate-200">
                            <img
                                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                className="w-full h-full object-cover"
                                alt="Doctor performing chiropractic adjustment"
                            />

                            {/* Floating Badge overlay */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 1 }}
                                className="absolute -bottom-6 -left-6 lg:-left-12 glass p-6 rounded-2xl flex items-center space-x-4 max-w-xs"
                            >
                                <div className="bg-green-100 p-3 rounded-full">
                                    <Award className="w-8 h-8 text-green-600" />
                                </div>
                                <div>
                                    <p className="text-slate-900 font-bold">Expert Chiropractic Care</p>
                                    <p className="text-sm text-slate-600">Certified Specialists</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
