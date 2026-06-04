import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../animations/variants';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionTitle from '../components/SectionTitle';
import {
  FaCrosshairs,
  FaUsers,
  FaMicrochip,
  FaHandHoldingUsd,
  FaFileAlt,
} from 'react-icons/fa';

const features = [
  {
    icon: FaCrosshairs,
    title: 'Accurate Measurements',
    description: 'Centimeter-level precision using DGPS technology ensuring exact boundary and topographic data.',
  },
  {
    icon: FaUsers,
    title: 'Professional Team',
    description: 'Experienced licensed surveyors and engineers dedicated to delivering reliable results.',
  },
  {
    icon: FaMicrochip,
    title: 'Latest DGPS Technology',
    description: 'State-of-the-art satellite receivers and Total Stations for superior accuracy and efficiency.',
  },
  {
    icon: FaHandHoldingUsd,
    title: 'Affordable Pricing',
    description: 'Competitive pricing without compromising on quality or accuracy of survey results.',
  },
  {
    icon: FaFileAlt,
    title: 'Quick Report Delivery',
    description: 'Fast turnaround with detailed digital reports, maps, and documentation for every project.',
  },
];

export default function WhyChooseUs() {
  const [ref, inView] = useScrollReveal();

  return (
    <section id="why-us" className="section-padding relative overflow-hidden bg-surface/50">
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-accent-gold/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle
          subtitle="Why Choose Us"
          title="The Sri Velan Advantage"
          description="We combine experience, technology, and commitment to deliver survey results you can trust."
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{
                y: -5,
                transition: { duration: 0.3 },
              }}
              className="group glass rounded-2xl p-7 text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-accent-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-accent-gold/20 to-accent-red/20 flex items-center justify-center border border-accent-gold/10 group-hover:border-accent-gold/30 transition-colors duration-300"
              >
                <feature.icon className="text-accent-gold" size={28} />
              </motion.div>

              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-accent-gold transition-colors duration-300">
                {feature.title}
              </h3>

              <p className="text-white/50 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
