import { motion } from "framer-motion";
import { useState } from "react";


export const StarOption = ({ max = 5, value, onChange }) => {
  const [selected, setSelected] = useState(value || 0);
  // Light bulb brightness levels
  const bulbs = [
    { emoji: "💡" },
    { emoji: "💡" },
    { emoji: "💡" },
    { emoji: "💡" },
    { emoji: "💡" },
  ];

  // For visual difference, use opacity for each bulb
  const bulbOpacities = [0.3, 0.55, 0.75, 0.9, 1];
  const angleStep = 360 / max;

  return (
    <div className="flex flex-col items-center mt-6">
      <div className="relative w-64 h-64 flex items-center justify-center">
        {bulbs.map((bulb, index) => {
          const angle = index * angleStep;
          const isFilled = index + 1 <= selected;
          return (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center"
              style={{
                transform: `rotate(${angle}deg) translate(8rem) rotate(-${angle}deg)`
              }}
              onClick={() => {
                setSelected(index + 1);
                onChange(index + 1);
              }}
              initial={{ scale: 0 }}
              animate={{
                scale: isFilled ? 1.3 : 1,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: index * 0.1,
              }}
              whileHover={{
                scale: 1.5,
              }}
            >
              <motion.span
                className="text-3xl md:text-4xl"
                style={{ opacity: bulbOpacities[index] }}
                animate={{
                  textShadow: isFilled
                    ? "0 0 12px rgba(255,223,0,0.9)"
                    : "0 0 0px rgba(0,0,0,0)",
                }}
              >
                {bulb.emoji}
              </motion.span>
            </motion.div>
          );
        })}

        {/* Center Label with rating value */}
        <div className="absolute left-1/2 top-1/8 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-pink-200 to-purple-300 flex flex-col items-center justify-center text-white font-semibold shadow-lg">
          <span className="text-3xl">{selected > 0 ? selected : '-'}</span>
          <span className="text-xs mt-1">Recognition & Visibility</span>
        </div>
      </div>
    </div>
  );
};