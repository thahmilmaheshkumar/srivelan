import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ParticleBackground from './components/ParticleBackground';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Equipment from './sections/Equipment';
import WhyChooseUs from './sections/WhyChooseUs';
import Workflow from './sections/Workflow';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import EnquiryForm from './sections/EnquiryForm';

export default function App() {
  return (
    <div className="relative min-h-screen bg-primary">
      <ParticleBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Services />
        <Equipment />
        <WhyChooseUs />
        <Workflow />
        <Testimonials />
        <Contact />
        <EnquiryForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
