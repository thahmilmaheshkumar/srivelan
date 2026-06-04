import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/9095520640"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 transition-colors duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        y: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
        scale: { duration: 0.2 },
      }}
    >
      <FaWhatsapp className="text-white" size={28} />
    </motion.a>
  );
}
