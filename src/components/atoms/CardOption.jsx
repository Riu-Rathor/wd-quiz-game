import { motion } from "framer-motion";

export const CardOption = ({ label, description, checked, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ scale: 1.05, rotate: 1 }}
      whileTap={{ scale: 0.95, rotate: -1 }}
      className={`
        relative cursor-pointer p-4 flex flex-col items-center justify-center text-center
        min-w-[100px] max-w-[140px] sm:min-w-[120px] sm:max-w-[160px] h-[80px] sm:h-[100px] 
        border transition-all shadow-md
        rounded-[60%_40%_60%_40%_/_40%_60%_40%_60%] 
        ${checked
          ? "bg-gradient-to-r from-pink-400 to-purple-500 text-white border-transparent shadow-xl"
          : "bg-white text-gray-700 border-gray-200 hover:shadow-lg"}
      `}
    >
      <h3 className="font-semibold text-xs sm:text-sm leading-tight">{label}</h3>
      {description && (
        <p className="text-xs mt-1 text-gray-500 leading-tight">{description}</p>
      )}
    </motion.div>
  );
};
