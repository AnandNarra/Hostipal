import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: "Ramesh P.",
        text: "After 5 years of chronic lower back pain, the team at Active Rehab finally gave me relief. Their chiropractic approach is professional and highly effective. I can now walk without discomfort.",
    },
    {
        id: 2,
        name: "Sujata M.",
        text: "The osteopathy sessions were life-changing for my frozen shoulder. The doctors take time to explain everything and ensure you're comfortable. The Patia branch in Bhubaneswar is exceptionally clean and well-equipped.",
    },
    {
        id: 3,
        name: "Dr. K. Mishra",
        text: "As a surgeon, I spend long hours standing which took a toll on my spine. The targeted rehabilitation therapy here helped me correct my posture and eliminate the sciatic pain completely.",
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, 6000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    const handleNext = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const variants = {
        enter: (dir) => ({
            x: dir > 0 ? 100 : -100,
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1
        },
        exit: (dir) => ({
            x: dir < 0 ? 100 : -100,
            opacity: 0
        })
    };

    return (
        <section id="testimonials" className="py-24 bg-blue-50 relative overflow-hidden">

            {/* Decorative quotes */}
            <Quote className="absolute top-10 left-10 w-64 h-64 text-blue-100 opacity-50 rotate-180" />
            <Quote className="absolute bottom-10 right-10 w-64 h-64 text-blue-100 opacity-50" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

                <h2 className="text-primary font-bold tracking-wide uppercase mb-2">Testimonials</h2>
                <h3 className="text-4xl font-extrabold text-slate-900 mb-16">Stories of Recovery</h3>

                <div className="relative h-64 md:h-56">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="absolute w-full top-0 left-0"
                        >
                            <div className="flex justify-center mb-6">
                                <div className="flex space-x-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                                    ))}
                                </div>
                            </div>
                            <p className="text-xl md:text-2xl text-slate-700 italic mb-8 leading-relaxed">
                                "{testimonials[currentIndex].text}"
                            </p>
                            <h4 className="font-bold text-slate-900">{testimonials[currentIndex].name}</h4>
                            <p className="text-sm text-slate-500">Verified Patient</p>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Controls */}
                <div className="flex justify-center items-center space-x-8 mt-12">
                    <button
                        onClick={handlePrev}
                        className="p-3 rounded-full bg-white shadow-md text-slate-400 hover:text-primary hover:scale-110 transition-all focus:outline-none"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <div className="flex space-x-2">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => {
                                    setDirection(i > currentIndex ? 1 : -1);
                                    setCurrentIndex(i);
                                }}
                                className={`w-3 h-3 rounded-full transition-colors ${i === currentIndex ? 'bg-primary' : 'bg-slate-300 hover:bg-slate-400'
                                    }`}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={handleNext}
                        className="p-3 rounded-full bg-white shadow-md text-slate-400 hover:text-primary hover:scale-110 transition-all focus:outline-none"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Testimonials;
