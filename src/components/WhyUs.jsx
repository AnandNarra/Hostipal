import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, ClipboardCheck, Users, Activity } from 'lucide-react';

const features = [
    {
        icon: <Stethoscope className="w-8 h-8 text-white" />,
        title: "Advanced Treatment Techniques",
        description: "Utilizing the latest evidence-based protocols to ensure safe, effective, and rapid recovery from chronic and acute conditions."
    },
    {
        icon: <ClipboardCheck className="w-8 h-8 text-white" />,
        title: "Personalized Care Plans",
        description: "Every patient receives a fully customized treatment strategy tailored to their specific injury, lifestyle, and recovery goals."
    },
    {
        icon: <Users className="w-8 h-8 text-white" />,
        title: "Experienced Professionals",
        description: "Our certified chiropractors and osteopaths bring years of specialized clinical experience in musculoskeletal rehabilitation."
    },
    {
        icon: <Activity className="w-8 h-8 text-white" />,
        title: "Modern Equipment",
        description: "Our clinics are equipped with state-of-the-art therapeutic technology to support comprehensive and accelerated healing."
    }
];

const WhyUs = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h2 className="text-primary font-bold tracking-wide uppercase mb-2">Why Choose Us</h2>
                    <h3 className="text-4xl font-extrabold text-slate-900 mb-4">Excellence in Rehabilitation</h3>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        We are dedicated to providing the highest standard of care across Odisha with our specialized approach.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-slate-50 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 group"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30 group-hover:scale-110 group-hover:bg-accent transition-all duration-300">
                                {feature.icon}
                            </div>
                            <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
                            <p className="text-slate-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default WhyUs;
