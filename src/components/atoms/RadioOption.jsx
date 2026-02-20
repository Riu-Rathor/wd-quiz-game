import { motion } from "framer-motion";

export const RadioOption = ({ label, checked, onChange }) => {
  return (
    <label className="flex items-center gap-4 cursor-pointer select-none group">
      {/* Hidden Native Radio */}
      <input
        type="radio"
        checked={checked}
        onChange={onChange}
        className="hidden"
      />

      {/* Animated Radio */}
      <div className="relative w-7 h-7 flex items-center justify-center">
        
        {/* Outer Ring */}
        <motion.div
          className="absolute w-7 h-7 rounded-full border-2"
          animate={{
            borderColor: checked ? "#ec4899" : "#9ca3af",
            boxShadow: checked
              ? "0 0 15px rgba(236,72,153,0.5)"
              : "0 0 0px rgba(0,0,0,0)",
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Drawing Ring Effect */}
        <motion.svg
          className="absolute w-7 h-7"
          viewBox="0 0 100 100"
        >
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            fill="transparent"
            stroke="#ec4899"
            strokeWidth="6"
            strokeDasharray="283"
            strokeDashoffset={checked ? 0 : 283}
            initial={false}
            animate={{
              strokeDashoffset: checked ? 0 : 283,
              opacity: checked ? 1 : 0,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </motion.svg>

        {/* Inner Core */}
        <motion.div
          className="w-3 h-3 rounded-full bg-pink-500"
          initial={false}
          animate={{
            scale: checked ? 1 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 20,
          }}
        />

        {/* Pulse Ripple */}
        {checked && (
          <motion.div
            className="absolute w-7 h-7 rounded-full border-2 border-pink-400"
            initial={{ scale: 1, opacity: 0.5 }}
            animate={{ scale: 2.2, opacity: 0 }}
            transition={{ duration: 0.6 }}
          />
        )}
      </div>

      {/* Label */}
      <motion.span
        animate={{
          x: checked ? 6 : 0,
          color: checked ? "#db2777" : "#374151",
        }}
        transition={{ type: "spring", stiffness: 200 }}
        className="text-base font-medium"
      >
        {label}
      </motion.span>
    </label>
  );
};