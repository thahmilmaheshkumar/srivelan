import { motion } from "framer-motion";
import { fadeUp, staggerContainer, scaleIn } from "../animations/variants";
import { useScrollReveal } from "../hooks/useScrollReveal";
import SectionTitle from "../components/SectionTitle";
import { FaSatelliteDish, FaRulerCombined } from "react-icons/fa";

const equipment = [
  {
    name: "DGPS Receiver",
    category: "Satellite Survey",
    description:
      "High-precision differential GPS receivers providing centimeter-level accuracy for boundary surveys, topographic mapping, and geodetic control.",
    specs: [
      "Accuracy: ±1cm",
      "Channels: 220+",
      "RTK Correction",
      "Multi-Constellation",
    ],
    icon: FaSatelliteDish,
    image:
      "data:image/jpeg;base64,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",
  },
  {
    name: "Total Station",
    category: "Digital Survey",
    description:
      "Advanced electronic theodolite with distance measurement for precise angle and distance calculations in construction and land surveying.",
    specs: ['Accuracy: ±1"', "Range: 5000m", "Auto Tracking", "Data Export"],
    icon: FaRulerCombined,
    image:
      "https://images.pexels.com/photos/13279686/pexels-photo-13279686.jpeg",
  },
];

export default function Equipment() {
  const [ref, inView] = useScrollReveal();

  return (
    <section
      id="equipment"
      className="section-padding relative overflow-hidden"
    >
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
          animate={inView ? "visible" : "hidden"}
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
