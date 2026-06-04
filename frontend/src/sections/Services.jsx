import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../animations/variants';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionTitle from '../components/SectionTitle';
import {
  FaSatellite,
  FaMapMarkedAlt,
  FaDivide,
  FaBuilding,
  FaPencilRuler,
  FaCubes,
  FaFlask,
} from 'react-icons/fa';

const services = [
  {
    icon: FaSatellite,
    title: 'Satellite Survey & Digital Survey',
    description:
      'High-precision DGPS satellite surveys with centimeter-level accuracy for all your land mapping requirements.',
    color: 'from-accent-gold to-accent-gold-light',
  },
  {
    icon: FaMapMarkedAlt,
    title: 'Area Calculation & Land Mapping',
    description:
      'Detailed area computation and comprehensive mapping services using advanced digital surveying technology.',
    color: 'from-accent-red to-accent-red-light',
  },
  {
    icon: FaDivide,
    title: 'Land Partition & Sub Divisioning',
    description:
      'Professional land division services ensuring fair and accurate partition for legal and developmental purposes.',
    color: 'from-blue-500 to-blue-400',
  },
  {
    icon: FaBuilding,
    title: 'DTCP Site Layout Marking',
    description:
      'DTCP-approved site layout marking services for residential and commercial development projects.',
    color: 'from-emerald-500 to-emerald-400',
  },
  {
    icon: FaPencilRuler,
    title: 'Blueprint Drawing',
    description:
      'Professional blueprint and technical drawing services for construction, planning, and approval purposes.',
    color: 'from-amber-500 to-amber-400',
  },
  {
    icon: FaCubes,
    title: 'Structural Design',
    description:
      'Expert structural design and analysis services ensuring safe, efficient, and code-compliant construction.',
    color: 'from-rose-500 to-rose-400',
  },
  {
    icon: FaFlask,
    title: 'Land Soil Testing',
    description:
      'Comprehensive soil testing and analysis to determine ground suitability for construction and agriculture.',
    color: 'from-teal-500 to-teal-400',
  },
];

export default function Services() {
  const [ref, inView] = useScrollReveal();

  return (
    <section id="services" className="section-padding relative overflow-hidden bg-surface/50">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent-gold/3 rounded-full blur-[150px] -translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle
          subtitle="Our Services"
          title="What We Offer"
          description="Comprehensive land surveying and engineering solutions with cutting-edge DGPS technology and professional expertise."
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
              className="group glass rounded-2xl p-6 relative overflow-hidden cursor-default"
            >
              {/* Glow border on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, rgba(212,168,67,0.1), transparent, rgba(196,30,58,0.1))',
                }}
              />

              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="text-white" size={24} />
              </div>

              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-accent-gold transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-white/50 text-sm leading-relaxed">
                {service.description}
              </p>

              <div className="mt-4 flex items-center gap-2 text-accent-gold text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Learn more</span>
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
