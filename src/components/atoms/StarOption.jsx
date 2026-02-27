import { motion } from "framer-motion";
import { useState, useEffect } from "react";


export const StarOption = ({ max = 5, value, onChange }) => {
  const [selected, setSelected] = useState(value !== null && value !== undefined ? value : 0);
  
  // Update selected state when value prop changes
  useEffect(() => {
    setSelected(value !== null && value !== undefined ? value : 0);
  }, [value]);
  
  // Rating emojis
  const ratingEmojis = {
    0: "😐",
    1: "😞",
    2: "😕",
    3: "😊",
    4: "😄",
    5: "🤩",
  };

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
      {/* Rating Emoji Display */}
      <motion.div

        className="mb-4 sm:mb-6 text-4xl sm:text-5xl lg:text-6xl h-16 sm:h-20 flex items-center justify-center"
        key={selected}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {ratingEmojis[selected]}
      </motion.div>

      {/* Horizontal Bulbs Container */}

      <div className="relative flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 bg-purple-100 rounded-full shadow-lg border border-purple-300">
        {bulbs.map((bulb, index) => { 
          const isFilled = index + 1 <= selected;
          return (
            <motion.div
              key={index}
              className="cursor-pointer"
              onClick={() => {
                setSelected(index + 1);
                onChange(index + 1);
              }}
              initial={{ scale: 0 }}
              animate={{
                scale: isFilled ? 1.2 : 1,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: index * 0.1,
              }}
              whileHover={{
                scale: 1.4,
              }}
            >
              <motion.span

                className="text-2xl sm:text-3xl lg:text-4xl block"
                style={{ 
                  opacity: isFilled ? 1 : 0.4,
                  filter: isFilled ? "brightness(1.2)" : "brightness(0.8)"
                }}
                animate={{
                  textShadow: isFilled
                    ? "0 0 15px rgba(255,223,0,0.9)"
                    : "0 0 0px rgba(0,0,0,0)",
                }}
              >
                {bulb.emoji}
              </motion.span>
            </motion.div>
          );
        })}

        {/* Rating Circle Badge at End */}
        <motion.div 

          className="ml-1 sm:ml-2 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-pink-300 to-purple-400 flex items-center justify-center text-white font-bold shadow-lg"
          animate={{
            scale: selected > 0 ? 1 : 0.9,
            boxShadow: selected > 0 
              ? "0 0 20px rgba(175, 112, 239, 0.6)" 
              : "0 0 10px rgba(0,0,0,0.2)"
          }}
        >

          <span className="text-lg sm:text-xl lg:text-2xl">{selected}</span>
        </motion.div>
      </div>
    </div>
  );
};