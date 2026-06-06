import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaPhoneAlt, FaWhatsapp, FaDraftingCompass } from "react-icons/fa";
import {
  letterReveal,
  staggerContainer,
  fadeUp,
  scaleIn,
} from "../animations/variants";

const title = "SRI VELAN";
const subtitle = "Satellite (DGPS) & Digital Land Surveying";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-surface to-primary-light" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-accent-gold/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-accent-red/5 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-secondary/30 blur-[150px]" />
      </motion.div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(212,168,67,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,67,0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white/5 backdrop-blur-sm border border-accent-gold/20 rounded-full"
        >
          <div className="w-2 h-2 rounded-full bg-accent-gold animate-pulse" />
          <span className="text-accent-gold text-sm font-medium tracking-wide">
            Professional Land Surveying Since 2014
          </span>
        </motion.div>

        {/* Title with letter reveal */}
        <motion.h1
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold mb-4 leading-tight"
        >
          {title.split("").map((char, i) => (
            <motion.span
              key={i}
              variants={letterReveal}
              className="text-gradient-gold inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-lg sm:text-xl lg:text-2xl text-white/70 mb-4 font-light"
        >
          {subtitle}
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-accent-gold/80 text-sm sm:text-base mb-10 tracking-widest uppercase"
        >
          Precision . Accuracy . Excellence
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.a
            variants={fadeUp}
            href="tel:9095520640"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(212, 168, 67, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-gold to-accent-gold-light text-primary font-semibold rounded-xl text-sm sm:text-base transition-all duration-300"
          >
            <FaPhoneAlt size={16} />
            Call Now
          </motion.a>

          <motion.a
            variants={fadeUp}
            href="https://wa.me/9095520640"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(34, 197, 94, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl text-sm sm:text-base transition-all duration-300"
          >
            <FaWhatsapp size={18} />
            WhatsApp
          </motion.a>

          <motion.a
            variants={fadeUp}
            href="#enquiry"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(196, 30, 58, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-red to-accent-red-light text-white font-semibold rounded-xl text-sm sm:text-base transition-all duration-300"
          >
            <FaDraftingCompass size={16} />
            Get Survey Quote
          </motion.a>
        </motion.div>

        {/* Floating equipment icons */}
        <div className="hidden lg:block">
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-[8%] glass rounded-2xl p-4 w-16 h-16 flex items-center justify-center"
          >
            <FaDraftingCompass className="text-accent-gold" size={28} />
          </motion.div>
          <motion.div
            animate={{ y: [0, 12, 0], rotate: [0, -5, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute top-1/3 right-[10%] glass rounded-2xl p-4 w-16 h-16 flex items-center justify-center"
          >
            <span className="text-2xl">🛰️</span>
          </motion.div>
          <motion.div
            animate={{ y: [0, -10, 0], x: [0, 8, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute bottom-1/4 left-[15%] glass rounded-2xl p-4 w-14 h-14 flex items-center justify-center"
          >
            <span className="text-xl">📐</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-white/40 text-xs tracking-widest uppercase">
            Scroll
          </span>
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-accent-gold"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
