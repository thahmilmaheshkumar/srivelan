import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { fadeUp, staggerContainer } from '../animations/variants';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionTitle from '../components/SectionTitle';
import {
  FaPhoneAlt,
  FaSearchLocation,
  FaSatelliteDish,
  FaMapMarkedAlt,
  FaFileAlt,
  FaTruck,
} from 'react-icons/fa';

const steps = [
  {
    icon: FaPhoneAlt,
    title: 'Inquiry',
    description: 'Contact us with your survey requirements and project details.',
  },
  {
    icon: FaSearchLocation,
    title: 'Site Visit',
    description: 'Our team visits the site to assess conditions and plan the survey.',
  },
  {
    icon: FaSatelliteDish,
    title: 'Survey',
    description: 'DGPS satellite survey conducted with precision instruments.',
  },
  {
    icon: FaMapMarkedAlt,
    title: 'Mapping',
    description: 'Digital mapping and area calculation from survey data.',
  },
  {
    icon: FaFileAlt,
    title: 'Report',
    description: 'Comprehensive report with maps, drawings, and documentation.',
  },
  {
    icon: FaTruck,
    title: 'Delivery',
    description: 'Final deliverables provided in digital and print formats.',
  },
];

export default function Workflow() {
  const [ref, inView] = useScrollReveal();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ['0%', '100%']);

  return (
    <section id="workflow" ref={containerRef} className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[180px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle
          subtitle="Our Process"
          title="Project Workflow"
          description="A streamlined process from inquiry to delivery, ensuring efficiency and accuracy at every step."
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="relative"
        >
          {/* Desktop Timeline */}
          <div className="hidden md:block relative">
            {/* Animated line */}
            <div className="absolute top-12 left-0 right-0 h-0.5 bg-white/5" />
            <motion.div
              style={{ height: lineHeight }}
              className="absolute top-12 left-0 right-0 h-0.5 origin-left"
            >
              <div className="w-full h-0.5 bg-gradient-to-r from-accent-gold to-accent-red" />
            </motion.div>

            <div className="grid grid-cols-6 gap-4">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="flex flex-col items-center text-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.15, boxShadow: '0 0 30px rgba(212,168,67,0.4)' }}
                    className="w-24 h-24 rounded-full bg-surface border-2 border-accent-gold/30 flex items-center justify-center mb-4 relative z-10"
                  >
                    <step.icon className="text-accent-gold" size={32} />
                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-accent-gold text-primary flex items-center justify-center text-xs font-bold">
                      {i + 1}
                    </div>
                  </motion.div>
                  <h4 className="text-white font-semibold text-sm mb-1">{step.title}</h4>
                  <p className="text-white/40 text-xs leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-0 relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-white/10" />
            <motion.div
              style={{ height: lineHeight }}
              className="absolute left-6 top-0 w-0.5 bg-gradient-to-b from-accent-gold to-accent-red origin-top"
            />

            {steps.map((step, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex items-start gap-6 py-6 relative"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 min-w-[3rem] rounded-full bg-surface border-2 border-accent-gold/30 flex items-center justify-center relative z-10"
                >
                  <step.icon className="text-accent-gold" size={18} />
                  <div className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-accent-gold text-primary flex items-center justify-center text-[10px] font-bold">
                    {i + 1}
                  </div>
                </motion.div>
                <div>
                  <h4 className="text-white font-semibold mb-1">{step.title}</h4>
                  <p className="text-white/40 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
