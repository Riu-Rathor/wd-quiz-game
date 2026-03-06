import { motion } from "framer-motion";

export default function Button({
  children,
  type = "button",
  disabled = false,
}) {
  return (
    <motion.button
      type={type}
      disabled={disabled}
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      className={`
        w-full py-3 sm:py-4 text-base sm:text-lg rounded-xl
        font-semibold shadow-lg relative overflow-hidden
        transition-all duration-300
        ${
          disabled
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-gradient-to-r from-purple-400 to-pink-400 text-white cursor-pointer"
        }
      `}
    >
      <span className="relative z-10">{children}</span>

      {!disabled && (
        <span className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition duration-300 blur-xl" />
      )}
    </motion.button>
  );
}