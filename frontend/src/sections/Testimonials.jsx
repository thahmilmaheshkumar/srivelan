import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp, staggerContainer } from '../animations/variants';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionTitle from '../components/SectionTitle';
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Property Developer',
    text: 'Sri Velan provided exceptional DGPS survey for our 50-acre layout project. Their accuracy and professionalism saved us significant time and resources.',
    rating: 5,
  },
  {
    name: 'Priya Manickam',
    role: 'Land Owner',
    text: 'Very satisfied with the land partition survey. The team was punctual, thorough, and delivered the report ahead of schedule. Highly recommend their services.',
    rating: 5,
  },
  {
    name: 'Engineer Senthil',
    role: 'Civil Engineer',
    text: 'We have been working with Sri Velan for our DTCP projects. Their DGPS accuracy and blueprint quality is unmatched in the region. A trusted partner.',
    rating: 5,
  },
  {
    name: 'Mohan Dhas',
    role: 'Builder',
    text: 'Prompt service, accurate measurements, and affordable pricing. They completed our site layout marking perfectly as per DTCP requirements.',
    rating: 5,
  },
  {
    name: 'Lakshmi Devi',
    role: 'Agricultural Land Owner',
    text: 'Used their soil testing and land mapping service for our agricultural property. The detailed report was extremely helpful for our planning.',
    rating: 4,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [ref, inView] = useScrollReveal();

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden bg-surface/50">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-gold/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle
          subtitle="Testimonials"
          title="What Our Clients Say"
          description="Hear from property owners, developers, and engineers who trust our surveying services."
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          className="max-w-3xl mx-auto relative"
        >
          <div className="glass-strong rounded-3xl p-8 sm:p-12 relative overflow-hidden min-h-[320px] flex items-center">
            {/* Quote decoration */}
            <FaQuoteLeft className="absolute top-6 left-6 text-accent-gold/10" size={48} />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
                className="text-center w-full"
              >
                {/* Stars */}
                <div className="flex items-center justify-center gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar
                      key={i}
                      className={i < testimonials[current].rating ? 'text-accent-gold' : 'text-white/20'}
                      size={16}
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8 italic">
                  "{testimonials[current].text}"
                </p>

                {/* Author */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-gold to-accent-red flex items-center justify-center text-primary font-bold text-lg mb-2">
                    {testimonials[current].name.charAt(0)}
                  </div>
                  <h4 className="text-white font-semibold">{testimonials[current].name}</h4>
                  <span className="text-accent-gold/70 text-sm">{testimonials[current].role}</span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center gap-4">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/60 hover:text-accent-gold hover:border-accent-gold/30 transition-all duration-300"
              >
                <FaChevronLeft size={14} />
              </button>

              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === current ? 'bg-accent-gold w-6' : 'bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/60 hover:text-accent-gold hover:border-accent-gold/30 transition-all duration-300"
              >
                <FaChevronRight size={14} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
