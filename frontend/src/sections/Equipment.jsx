import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, scaleIn } from '../animations/variants';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionTitle from '../components/SectionTitle';
import { FaSatelliteDish, FaRulerCombined } from 'react-icons/fa';

const equipment = [
  {
    name: 'DGPS Receiver',
    category: 'Satellite Survey',
    description: 'High-precision differential GPS receivers providing centimeter-level accuracy for boundary surveys, topographic mapping, and geodetic control.',
    specs: ['Accuracy: ±1cm', 'Channels: 220+', 'RTK Correction', 'Multi-Constellation'],
    icon: FaSatelliteDish,
    image: 'https://images.pexels.com/photos/3735709/pexels-photo-3735709.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Total Station',
    category: 'Digital Survey',
    description: 'Advanced electronic theodolite with distance measurement for precise angle and distance calculations in construction and land surveying.',
    specs: ['Accuracy: ±1"', 'Range: 5000m', 'Auto Tracking', 'Data Export'],
    icon: FaRulerCombined,
    image: 'https://images.pexels.com/photos/5699536/pexels-photo-5699536.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function Equipment() {
  const [ref, inView] = useScrollReveal();

  return (
    <section id="equipment" className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent-red/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle
          subtitle="Our Equipment"
          title="Advanced Surveying Instruments"
          description="We use the latest DGPS satellite receivers and Total Station instruments to deliver unmatched precision and reliability."
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {equipment.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -5 }}
              className="group glass-strong rounded-3xl overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <motion.img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />

                {/* Badge */}
                <div className="absolute top-4 left-4 px-3 py-1.5 bg-accent-gold/20 backdrop-blur-sm border border-accent-gold/30 rounded-full text-accent-gold text-xs font-medium">
                  {item.category}
                </div>

                {/* Icon overlay */}
                <div className="absolute bottom-4 right-4 w-12 h-12 rounded-xl bg-accent-gold/10 backdrop-blur-sm flex items-center justify-center border border-accent-gold/20">
                  <item.icon className="text-accent-gold" size={24} />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-gold transition-colors duration-300">
                  {item.name}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* Specs */}
                <div className="grid grid-cols-2 gap-3">
                  {item.specs.map((spec, j) => (
                    <motion.div
                      key={j}
                      variants={scaleIn}
                      className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg border border-white/5"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
                      <span className="text-white/70 text-xs">{spec}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
