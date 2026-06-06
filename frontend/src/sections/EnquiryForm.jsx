import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { fadeUp, staggerContainer, scaleIn } from "../animations/variants";
import { useScrollReveal } from "../hooks/useScrollReveal";
import SectionTitle from "../components/SectionTitle";
import { FaPaperPlane, FaCheckCircle } from "react-icons/fa";

const initialForm = { name: "", email: "", contact: "", phone: "" };

export default function EnquiryForm() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [ref, inView] = useScrollReveal();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/enquiry`,
        form,
      );
      setSuccess(true);
      setForm(initialForm);

      console.log(response);
    } catch (err) {
      setError(
        err.response?.data?.error || "Something went wrong. Please try again.",
      );
    }
  };

  const inputClasses =
    "w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-white/30 text-sm focus:outline-none focus:border-accent-gold/50 focus:bg-white/8 focus:shadow-[0_0_20px_rgba(212,168,67,0.15)] transition-all duration-300";

  return (
    <section
      id="enquiry"
      className="section-padding relative overflow-hidden bg-surface/50"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent-gold/5 rounded-full blur-[180px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent-red/5 rounded-full blur-[120px]" />

      <div className="max-w-4xl mx-auto relative z-10">
        <SectionTitle
          subtitle="Get A Quote"
          title="Enquiry Form"
          description="Fill out the form below and our team will get back to you within 24 hours with a detailed quote."
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          className="glass-strong rounded-3xl p-6 sm:p-10 relative overflow-hidden"
        >
          {/* Decorative gradient border */}
          <div className="absolute inset-0 rounded-3xl pointer-events-none">
            <div className="absolute inset-0 rounded-3xl border border-accent-gold/10" />
          </div>

          {/* Glass gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/3 via-transparent to-accent-red/3 pointer-events-none rounded-3xl" />

          <AnimatePresence mode="wait">
            {success ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.5 }}
                >
                  <FaCheckCircle className="text-green-400 mb-4" size={56} />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Enquiry Submitted!
                </h3>
                <p className="text-white/60 text-sm">
                  Thank you for reaching out. We will contact you shortly.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                onSubmit={handleSubmit}
                className="relative z-10 space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <motion.div variants={fadeUp}>
                    <label className="block text-white/60 text-sm mb-2 font-medium">
                      Name <span className="text-accent-red">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className={inputClasses}
                    />
                  </motion.div>

                  <motion.div variants={fadeUp}>
                    <label className="block text-white/60 text-sm mb-2 font-medium">
                      Email <span className="text-accent-red">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className={inputClasses}
                    />
                  </motion.div>

                  <motion.div variants={fadeUp}>
                    <label className="block text-white/60 text-sm mb-2 font-medium">
                      Contact <span className="text-accent-red">*</span>
                    </label>
                    <input
                      type="text"
                      name="contact"
                      value={form.contact}
                      onChange={handleChange}
                      required
                      placeholder="Contact number"
                      className={inputClasses}
                    />
                  </motion.div>

                  <motion.div variants={fadeUp}>
                    <label className="block text-white/60 text-sm mb-2 font-medium">
                      Phone Number <span className="text-accent-red">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="Alternate phone"
                      className={inputClasses}
                    />
                  </motion.div>
                </div>

                {error && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-400 text-sm text-center"
                  >
                    {error}
                  </motion.p>
                )}

                <motion.div variants={fadeUp} className="text-center pt-2">
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{
                      scale: 1.03,
                      boxShadow: "0 0 30px rgba(212,168,67,0.3)",
                    }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-accent-gold to-accent-gold-light text-primary font-semibold rounded-xl text-sm sm:text-base disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300"
                  >
                    {loading ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5 text-primary"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane size={16} />
                        Submit Enquiry
                      </>
                    )}
                  </motion.button>
                </motion.div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
