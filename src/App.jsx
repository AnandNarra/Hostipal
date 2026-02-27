import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Conditions from './components/Conditions';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="font-sans text-slate-900 bg-slate-50 antialiased selection:bg-primary/30">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Conditions />
        <Services />
        <WhyUs />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
