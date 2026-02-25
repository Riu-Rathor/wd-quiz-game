import { motion, AnimatePresence } from "framer-motion";


export const RadioOption = ({ label, checked, onChange }) => {
  // Sparkle positions and colors
  const sparkles = [
    { x: 6, y: 2, color: '#f472b6' },
    { x: 18, y: 10, color: '#fbbf24' },
    { x: 10, y: 18, color: '#38bdf8' },
    { x: 22, y: 6, color: '#a3e635' },
  ];

  return (
    <motion.label
      className="flex items-center gap-3 cursor-pointer select-none group min-h-[40px] relative"
      initial={false}
      animate={{
        y: checked ? -2 : 0,
        scale: checked ? 1.04 : 1,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      style={{ width: 'fit-content' }}
    >
      {/* Hidden Native Radio */}
      <input
        type="radio"
        checked={checked}
        onChange={onChange}
        className="hidden"
      />

      {/* Morphing Shape & Sparkle */}
      <motion.div
        className="relative flex items-center justify-center"
        animate={{
          width: checked ? 72 : 32,
          height: 32,
          borderRadius: checked ? 20 : 16,
          background: checked ? "linear-gradient(90deg,#f472b6,#ec4899)" : "#fff",
          boxShadow: checked
            ? "0 4px 16px 0 #ec489955, 0 1.5px 4px 0 #fff"
            : "0 1px 4px 0 #0001",
          borderColor: checked ? "#ec4899" : "#e5e7eb",
        }}
        transition={{
          type: "spring",
          stiffness: 350,
          damping: 24,
        }}
        style={{
          borderWidth: 2,
          borderStyle: "solid",
          minWidth: 32,
        }}
      >
        {/* Sparkles */}
        <AnimatePresence>
          {checked && sparkles.map((s, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{ left: s.x, top: s.y, pointerEvents: 'none' }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 0.8] }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.07 }}
            >
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                <circle cx="4" cy="4" r="2.5" fill={s.color} />
              </svg>
            </motion.div>
          ))}
        </AnimatePresence>
        {/* Inner Core */}
        <motion.div
          className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full"
          animate={{
            scale: checked ? 1 : 0.7,
            background: checked ? "#fff" : "#f9a8d4",
            opacity: checked ? 1 : 0.7,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 22 }}
        />
      </motion.div>
      {/* Label as sibling, never overlaps */}
      <motion.span
        className="text-base font-semibold whitespace-nowrap px-2"
        animate={{
          color: checked ? "#db2777" : "#374151",
        }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        {label}
      </motion.span>
    </motion.label>
  );
};
