import React from "react";
import { motion } from "framer-motion";
import { FaFemale, FaMale } from "react-icons/fa";

export default function GenderOption({ type, selected, onClick }) {
  const isFemale = type === "female";

  return (
    <motion.div
      onClick={onClick}
      className="flex-1 relative rounded-2xl cursor-pointer"
      
      /* Hover handled here (stable area) */
      whileHover="hover"
      whileTap="tap"
    >
      {/* Glow Layer (does not scale) */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        animate={
          selected
            ? {
                boxShadow: [
                  "0 0 15px rgba(236,72,153,0.4)",
                  "0 0 35px rgba(168,85,247,0.6)",
                  "0 0 15px rgba(236,72,153,0.4)",
                ],
              }
            : { boxShadow: "0 0 0px rgba(0,0,0,0)" }
        }
        transition={{
          boxShadow: {
            duration: 2,
            repeat: selected ? Infinity : 0,
            ease: "easeInOut",
          },
        }}
      />

      {/* Card Content */}
      <motion.div
        variants={{
          hover: { scale: 1.05 },
          tap: { scale: 0.96 },
        }}
        transition={{ duration: 0.15, ease: "linear" }}
        className={`relative flex flex-col items-center justify-center 
        py-5 rounded-2xl overflow-hidden
        backdrop-blur-lg border transition-all duration-300
        ${
          selected
            ? "bg-gradient-to-br from-pink-300/60 to-purple-300/60 border-white/60 text-white"
            : "bg-white/30 border-white/40 text-gray-700"
        }`}
      >
        {/* Animated Gradient */}
        {selected && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-pink-300 via-purple-300 to-rose-300 opacity-30"
            animate={{ x: ["-100%", "100%"] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        )}

        {/* Icon */}
        <motion.div
          animate={
            selected
              ? { rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }
              : { rotate: 0, scale: 1 }
          }
          transition={{
            duration: selected ? 0.6 : 0.2,
            ease: "easeOut",
          }}
          className="relative z-10"
        >
          {isFemale ? <FaFemale size={26} /> : <FaMale size={26} />}
        </motion.div>

        <span className="mt-3 capitalize relative z-10 font-medium tracking-wide">
          {type}
        </span>
      </motion.div>
    </motion.div>
  );
}