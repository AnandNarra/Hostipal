import React from 'react';
import { motion } from 'framer-motion';
import { HeartPulse, Target, CheckCircle2 } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 gap-16 items-center">

                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                        className="relative mb-12 lg:mb-0"
                    >
                        <div className="rounded-3xl overflow-hidden shadow-xl shadow-blue-900/10 aspect-square">
                            <img
                                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Doctor consulting with patient"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Content Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2 className="text-primary text-sm font-bold uppercase tracking-wider mb-2">About Active Rehab</h2>
                        <h3 className="text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
                            Leading the Way in Specialized Non-Surgical Recovery
                        </h3>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Active Rehab Chiropractic & Osteopathy Centre provides advanced solutions for spine, joint, and musculoskeletal conditions. We believe in treating the root cause of pain, not just the symptoms, utilizing evidence-based therapies for long-lasting relief.
                        </p>

                        <div className="space-y-6">

                            {/* Mission Card */}
                            <div className="bg-blue-50 rounded-2xl p-6 flex items-start space-x-4">
                                <div className="bg-primary/10 p-3 rounded-xl flex-shrink-0">
                                    <Target className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-slate-900 mb-2">Our Mission</h4>
                                    <p className="text-slate-600">Deliver evidence-based, patient-centered rehabilitation with permanent, sustainable results.</p>
                                </div>
                            </div>

                            {/* Vision Card */}
                            <div className="bg-orange-50 rounded-2xl p-6 flex items-start space-x-4">
                                <div className="bg-accent/10 p-3 rounded-xl flex-shrink-0">
                                    <HeartPulse className="w-6 h-6 text-accent" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-slate-900 mb-2">Our Vision</h4>
                                    <p className="text-slate-600">To become Odisha’s most trusted spine, joint care, and musculoskeletal rehabilitation center.</p>
                                </div>
                            </div>

                        </div>

                        {/* Qualifications */}
                        <div className="mt-10 grid grid-cols-2 gap-4">
                            <div className="flex items-center space-x-3 text-slate-700 font-medium">
                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                                <span>Certified Chiropractors</span>
                            </div>
                            <div className="flex items-center space-x-3 text-slate-700 font-medium">
                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                                <span>Licensed Osteopaths</span>
                            </div>
                            <div className="flex items-center space-x-3 text-slate-700 font-medium">
                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                                <span>Modern Techniques</span>
                            </div>
                            <div className="flex items-center space-x-3 text-slate-700 font-medium">
                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                                <span>Holistic Approach</span>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
