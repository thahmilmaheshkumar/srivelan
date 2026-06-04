import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { fadeDown } from "../animations/variants";
import logo from "../assets/srivelenLogo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Equipment", href: "#equipment" },
  { label: "Workflow", href: "#workflow" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={fadeDown}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#home" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-gold to-accent-red flex items-center justify-center font-bold text-primary text-lg">
              <img
                src={logo}
                alt="Logo"
                className="h-full rounded-lg w-full object-cover"
              />
            </div>
            <div className="hidden sm:block">
              <span className="font-display font-bold text-lg text-white">
                SRI VELAN
              </span>
              <span className="block text-[10px] text-accent-gold tracking-widest uppercase">
                DGPS Surveying
              </span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-white/70 hover:text-accent-gold transition-colors duration-300 rounded-lg hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#enquiry"
              className="ml-4 px-5 py-2.5 bg-gradient-to-r from-accent-gold to-accent-gold-light text-primary font-semibold text-sm rounded-lg hover:shadow-lg hover:shadow-accent-gold/20 transition-all duration-300"
            >
              Get Quote
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-white/80 hover:text-accent-gold transition-colors"
          >
            {mobileOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-primary/98 backdrop-blur-xl border-t border-white/5"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-white/70 hover:text-accent-gold hover:bg-white/5 rounded-lg transition-all duration-300"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#enquiry"
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 mt-2 bg-gradient-to-r from-accent-gold to-accent-gold-light text-primary font-semibold rounded-lg text-center"
              >
                Get Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
