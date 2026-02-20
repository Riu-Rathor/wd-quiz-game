import { motion } from "framer-motion";

const Bubble = ({ size, position, color, duration }) => {
  return (
    <motion.div
      className={`absolute ${position} ${size} rounded-full ${color} backdrop-blur-md border border-white/40`}
      animate={{ y: [0, -40, 0] }}
      transition={{ duration: duration, repeat: Infinity }}
    />
  );
};

export default Bubble;