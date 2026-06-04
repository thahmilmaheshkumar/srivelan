import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { fadeUp, staggerContainer } from "../animations/variants";
import { useScrollReveal } from "../hooks/useScrollReveal";
import logo from "../assets/srivelenLogo.png";

export default function Footer() {
  const [ref, inView] = useScrollReveal();

  return (
    <footer ref={ref} className="bg-primary border-t border-white/5">
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <motion.div variants={fadeUp}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-gold to-accent-red flex items-center justify-center font-bold text-primary text-lg">
                <img
                  src={logo}
                  alt="Logo"
                  className="h-full rounded-lg w-full object-cover"
                />
              </div>
              <div>
                <span className="font-display font-bold text-lg text-white">
                  SRI VELAN
                </span>
                <span className="block text-[10px] text-accent-gold tracking-widest uppercase">
                  DGPS Surveying
                </span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Professional satellite DGPS and digital land surveying services
              with 10+ years of experience delivering accurate results.
            </p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["About", "Services", "Equipment", "Workflow", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-white/50 hover:text-accent-gold text-sm transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h3 className="font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-2">
              {[
                "Satellite Survey",
                "Digital Land Survey",
                "Area Calculation",
                "Land Partition",
                "DTCP Layout Marking",
                "Blueprint Drawing",
              ].map((item) => (
                <li key={item} className="text-white/50 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h3 className="font-semibold text-white mb-4">Contact Info</h3>
            <div className="space-y-3">
              <a
                href="tel:9095520640"
                className="flex items-center gap-3 text-white/50 hover:text-accent-gold text-sm transition-colors"
              >
                <FaPhoneAlt className="text-accent-gold" size={14} />
                9095520640
              </a>
              <a
                href="tel:9488382277"
                className="flex items-center gap-3 text-white/50 hover:text-accent-gold text-sm transition-colors"
              >
                <FaPhoneAlt className="text-accent-gold" size={14} />
                9488382277
              </a>
              <a
                href="https://wa.me/9095520640"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/50 hover:text-green-400 text-sm transition-colors"
              >
                <FaWhatsapp className="text-green-400" size={14} />
                WhatsApp Us
              </a>
              <a
                href="mailto:srivelanconsultancy@gmail.com"
                className="flex items-center gap-3 text-white/50 hover:text-accent-gold text-sm transition-colors"
              >
                <FaEnvelope className="text-accent-gold" size={14} />
                srivelanconsultancy@gmail.com
              </a>
              <div className="flex items-start gap-3 text-white/50 text-sm">
                <FaMapMarkerAlt className="text-accent-gold mt-1" size={14} />
                <span>
                  23A KM Complex, Near Sub Registrar Office, Aval Poondurai -
                  638115
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Sri Velan Surveying. All rights
            reserved.
          </p>
          <p className="text-white/30 text-xs">
            Professional DGPS & Digital Land Surveying Services
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
