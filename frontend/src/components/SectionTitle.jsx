import { motion } from 'framer-motion';
import { fadeUp } from '../animations/variants';

export default function SectionTitle({ subtitle, title, description, light = false }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      className="text-center mb-16"
    >
      {subtitle && (
        <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-accent-gold bg-accent-gold/10 rounded-full border border-accent-gold/20 mb-4">
          {subtitle}
        </span>
      )}
      <h2
        className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${
          light ? 'text-primary' : 'text-white'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`max-w-2xl mx-auto text-base leading-relaxed ${light ? 'text-primary/70' : 'text-white/60'}`}>
          {description}
        </p>
      )}
      <div className="mt-6 flex items-center justify-center gap-2">
        <div className="w-12 h-0.5 bg-accent-gold/50" />
        <div className="w-3 h-3 rounded-full bg-accent-gold" />
        <div className="w-12 h-0.5 bg-accent-gold/50" />
      </div>
    </motion.div>
  );
}
