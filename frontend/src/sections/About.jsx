import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, scaleIn } from "../animations/variants";
import { useScrollReveal } from "../hooks/useScrollReveal";
import SectionTitle from "../components/SectionTitle";
import {
  FaProjectDiagram,
  FaCalendarAlt,
  FaCrosshairs,
  FaBolt,
} from "react-icons/fa";

function AnimatedCounter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useScrollReveal({ threshold: 0.5 });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);

    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

const stats = [
  {
    icon: FaProjectDiagram,
    value: 1000,
    suffix: "+",
    label: "Projects Completed",
  },
  { icon: FaCalendarAlt, value: 10, suffix: "+", label: "Years Experience" },
  {
    icon: FaCrosshairs,
    value: 100,
    suffix: "%",
    label: "Accurate DGPS Survey",
  },
  { icon: FaBolt, value: 0, suffix: "", label: "Fast Delivery", isText: true },
];

export default function About() {
  const [ref, inView] = useScrollReveal();

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent-gold/5 rounded-full blur-[120px]" />
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          subtitle="About Us"
          title="Who We Are"
          description="Sri Velan is a leading land surveying company specializing in DGPS satellite surveys and digital land mapping with over a decade of trusted service."
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={fadeUp} className="space-y-6">
            <p className="text-white/70 leading-relaxed text-base">
              <strong className="text-accent-gold">
                Sri Velan Consultancy
              </strong>{" "}
              has been at the forefront of satellite-based DGPS surveying and
              digital land mapping in Tamil Nadu. Our team of experienced
              surveyors combines cutting-edge technology with deep local
              expertise to deliver precise, reliable results for every project.
            </p>
            <p className="text-white/60 leading-relaxed text-base">
              From large-scale government projects to individual land partition
              needs, we provide comprehensive surveying solutions including DTCP
              site layout markings, structural design assistance, and
              professional blueprint drawings. Our commitment to accuracy and
              timely delivery has made us the trusted choice for engineers,
              builders, and landowners across the region.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              {[
                "DGPS Expert",
                "DTCP Approved",
                "Government Registered",
                "ISO Standards",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 text-xs font-medium bg-accent-gold/10 text-accent-gold border border-accent-gold/20 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeUp}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  variants={scaleIn}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(212, 168, 67, 0.2)",
                  }}
                  className="glass rounded-2xl p-6 text-center group cursor-default"
                >
                  <stat.icon
                    className="text-accent-gold mx-auto mb-3 group-hover:scale-110 transition-transform duration-300"
                    size={28}
                  />
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
                    {stat.isText ? (
                      <span>Fast</span>
                    ) : (
                      <AnimatedCounter
                        target={stat.value}
                        suffix={stat.suffix}
                      />
                    )}
                  </div>
                  <div className="text-white/50 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
