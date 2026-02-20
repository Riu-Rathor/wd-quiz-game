import { motion } from "framer-motion";
import { useState } from "react";

export const StarOption = ({ max = 5, value, onChange }) => {
  const [selected, setSelected] = useState(value || 0);
  const emojis = ["😞", "😐", "🙂", "😃", "🤩"];

  const angleStep = 360 / max;

  return (
    <div className="flex flex-col items-center mt-6">
      <div className="relative w-64 h-64 flex items-center justify-center">
        {emojis.map((emoji, index) => {
          const angle = index * angleStep; // degrees
          const isFilled = index + 1 <= selected;

          return (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center"
              style={{
                transform: `rotate(${angle}deg) translate(8rem) rotate(-${angle}deg)`,
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
                animate={{
                  textShadow: isFilled
                    ? "0 0 8px rgba(255,223,0,0.8)"
                    : "0 0 0px rgba(0,0,0,0)",
                }}
              >
                {emoji}
              </motion.span>
            </motion.div>
          );
        })}

        {/* Center Label */}
        <div className="absolute left-1/2 top-1/8 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-pink-200 to-purple-300 flex items-center justify-center text-white font-semibold shadow-lg">
          Rating
        </div>
      </div>
    </div>
  );
};