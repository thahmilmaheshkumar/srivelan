import { motion } from "framer-motion";
import { fadeUp, staggerContainer, scaleIn } from "../animations/variants";
import { useScrollReveal } from "../hooks/useScrollReveal";
import SectionTitle from "../components/SectionTitle";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const contactInfo = [
  {
    icon: FaPhoneAlt,
    label: "Phone 1",
    value: "9095520640",
    href: "tel:9095520640",
    color: "from-accent-gold to-accent-gold-light",
  },
  {
    icon: FaPhoneAlt,
    label: "Phone 2",
    value: "9488382277",
    href: "tel:9488382277",
    color: "from-accent-red to-accent-red-light",
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: "Chat with us",
    href: "https://wa.me/9095520640",
    color: "from-green-500 to-green-400",
  },
  {
    icon: FaEnvelope,
    label: "Email",
    value: "srivelanconsultancy@gmail.com",
    href: "mailto:srivelanconsultancy@gmail.com",
    color: "from-blue-500 to-blue-400",
  },
];

export default function Contact() {
  const [ref, inView] = useScrollReveal();

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-gold/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle
          subtitle="Contact Us"
          title="Get In Touch"
          description="Reach out to us for any land surveying inquiries, project quotes, or consultations."
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Contact Cards */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  variants={scaleIn}
                  whileHover={{
                    y: -3,
                    boxShadow: "0 0 20px rgba(212,168,67,0.15)",
                  }}
                  className="glass rounded-2xl p-5 group block"
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <item.icon className="text-white" size={20} />
                  </div>
                  <p className="text-white/40 text-xs mb-1">{item.label}</p>
                  <p className="text-white font-medium text-sm">{item.value}</p>
                </motion.a>
              ))}
            </div>

            {/* Address */}
            <motion.div variants={fadeUp} className="glass rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 min-w-[3rem] rounded-xl bg-gradient-to-br from-accent-gold/20 to-accent-red/20 flex items-center justify-center border border-accent-gold/10">
                  <FaMapMarkerAlt className="text-accent-gold" size={20} />
                </div>
                <div>
                  <p className="text-white/40 text-xs mb-1">Our Office</p>
                  <p className="text-white/80 text-sm leading-relaxed">
                    23A KM Complex,
                    <br />
                    Near Sub Registrar Office,
                    <br />
                    Aval Poondurai - 638115
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Map */}
          <motion.div
            variants={fadeUp}
            className="glass-strong rounded-3xl overflow-hidden h-[400px] lg:h-full min-h-[350px]"
          >
            <iframe
              title="Sri Velan Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d978.3520354771834!2d77.71782290000002!3d11.231357000000012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9713821290d0d%3A0x48d7fcf1d40571de!2sSri%20Velan%20Land%20Surveying!5e0!3m2!1sen!2sin!4v1780545934203!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
