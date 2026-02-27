import React from 'react';
import { useForm } from 'react-hook-form';
import { MapPin, Phone, Clock, Send } from 'lucide-react';

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log("Appointment Request:", data);
        alert("Thank you for your appointment request. We will contact you shortly to confirm.");
    };

    return (
        <section id="contact" className="py-24 bg-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h2 className="text-primary font-bold tracking-wide uppercase mb-2">Get in Touch</h2>
                    <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Schedule Your Visit</h3>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Ready to start your recovery? Contact us via phone or fill out the form to request an appointment at your preferred branch.
                    </p>
                </div>

                <div className="lg:grid lg:grid-cols-12 gap-12 bg-white rounded-3xl shadow-xl overflow-hidden shadow-blue-900/5">

                    {/* LEFT COLUMN - Contact Info */}
                    <div className="lg:col-span-5 bg-slate-900 text-white p-10 md:p-14">
                        <h4 className="text-3xl font-bold mb-10">Contact Information</h4>

                        <div className="space-y-8">

                            <div className="flex items-start space-x-4">
                                <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                                <div>
                                    <h5 className="font-semibold text-lg mb-1">Cuttack Branch</h5>
                                    <p className="text-slate-400 leading-relaxed text-sm">
                                        Vishwas Rehab Centre<br />
                                        Plot-C-1348/28<br />
                                        CDA Sector VI<br />
                                        Cuttack, Odisha 753014
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                                <div>
                                    <h5 className="font-semibold text-lg mb-1">Bhubaneswar Branch</h5>
                                    <p className="text-slate-400 leading-relaxed text-sm">
                                        1st Floor, Pramila Tower<br />
                                        Behind Pantaloons<br />
                                        Sishu Vihar, Patia<br />
                                        Bhubaneswar, Odisha 751024
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                                <div>
                                    <h5 className="font-semibold text-lg mb-1">Phone</h5>
                                    <a href="tel:8260229039" className="text-slate-400 hover:text-accent transition-colors text-sm">
                                        8260229039
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                                <div>
                                    <h5 className="font-semibold text-lg mb-1">Clinic Timing</h5>
                                    <p className="text-slate-400 text-sm">
                                        Mon–Sat: 9 AM – 7 PM<br />
                                        Sunday: By Appointment
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* RIGHT COLUMN - Form */}
                    <div className="lg:col-span-7 p-10 md:p-14">
                        <h4 className="text-2xl font-bold text-slate-900 mb-8">Request an Appointment</h4>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                            {/* Full Name */}
                            <div>
                                <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                                <input
                                    type="text"
                                    {...register("fullName", { required: "Full Name is required" })}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                                    placeholder="John Doe"
                                />
                                {errors.fullName && <p className="mt-1 text-sm text-red-500">{errors.fullName.message}</p>}
                            </div>

                            {/* Phone Number */}
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    {...register("phone", {
                                        required: "Phone Number is required",
                                        pattern: {
                                            value: /^[0-9]{10}$/,
                                            message: "Please enter a valid 10-digit phone number"
                                        }
                                    })}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                                    placeholder="9876543210"
                                />
                                {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>}
                            </div>

                            {/* Preferred Branch */}
                            <div>
                                <label htmlFor="branch" className="block text-sm font-medium text-slate-700 mb-2">Preferred Branch</label>
                                <div className="relative">
                                    <select
                                        {...register("branch", { required: "Please select a branch" })}
                                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all appearance-none bg-white"
                                    >
                                        <option value="">Select a location</option>
                                        <option value="cuttack">Cuttack</option>
                                        <option value="bhubaneswar">Bhubaneswar</option>
                                    </select>
                                </div>
                                {errors.branch && <p className="mt-1 text-sm text-red-500">{errors.branch.message}</p>}
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message (Optional)</label>
                                <textarea
                                    {...register("message")}
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none"
                                    placeholder="Tell us about your concern..."
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full inline-flex justify-center items-center px-6 py-4 border border-transparent text-base font-bold rounded-xl text-white bg-primary hover:bg-blue-700 transition duration-300 shadow-lg shadow-blue-500/30"
                            >
                                <Send className="w-5 h-5 mr-3" />
                                Book Appointment
                            </button>

                        </form>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Contact;
