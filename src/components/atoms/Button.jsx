import { motion } from "framer-motion";

export default function Button({ children, type = "button" }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      type={type}
      className="w-full py-3 sm:py-4 text-base sm:text-lg rounded-xl bg-gradient-to-r from-purple-400 to-pink-400 text-white font-semibold shadow-lg relative overflow-hidden cursor-pointer"
    >
      <span className="relative z-10">{children}</span>

      <span className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition duration-300 blur-xl" />
    </motion.button>
  );
}