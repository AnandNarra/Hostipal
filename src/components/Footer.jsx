import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* 1. Brand */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-4">Active Rehab</h3>
                        <p className="text-sm mb-6 leading-relaxed">
                            Providing advanced, non-surgical solutions for spine, joint, and musculoskeletal conditions in Cuttack & Bhubaneswar.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-slate-400 hover:text-accent transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-slate-400 hover:text-accent transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-slate-400 hover:text-accent transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* 2. Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#home" className="hover:text-accent transition-colors">Home</a></li>
                            <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
                            <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
                            <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* 3. Specialized Care */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Specialized Care</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#conditions" className="hover:text-accent transition-colors">Spine Care</a></li>
                            <li><a href="#conditions" className="hover:text-accent transition-colors">Joint Therapy</a></li>
                            <li><a href="#conditions" className="hover:text-accent transition-colors">Sports Rehab</a></li>
                            <li><a href="#conditions" className="hover:text-accent transition-colors">Chronic Pain Management</a></li>
                        </ul>
                    </div>

                    {/* 4. Branch Locations */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Branch Locations</h4>
                        <div className="space-y-4 text-sm mt-4">
                            <div className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                                <span>
                                    <strong>Cuttack</strong><br />
                                    Vishwas Rehab Centre, CDA Sector VI
                                </span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                                <span>
                                    <strong>Bhubaneswar</strong><br />
                                    Pramila Tower, Patia
                                </span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                                <span>
                                    <strong>Emergency Contact</strong><br />
                                    8260229039
                                </span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0 text-slate-400">
                    <p>&copy; 2026 Active Rehab Chiropractic & Osteopathy Centre.</p>
                    <div className="flex space-x-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Medical Disclaimer</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
