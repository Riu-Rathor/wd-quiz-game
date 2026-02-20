import { useState } from "react";
import { motion } from "framer-motion";
import { QuestionRenderer } from "../molecules/QuestionRenderer";

export const QuestionCard = ({
  question,
  onNext,
  initialValue,
}) => {
  const [answer, setAnswer] = useState(
    initialValue ?? getDefaultValue(question.type)
  );

  const [error, setError] = useState("");

  function getDefaultValue(type) {
    switch (type) {
      case "multiple":
        return [];
      case "scale":
        return null;
      case "single":
        return null;
      case "input":
        return "";
      default:
        return null;
    }
  }

  function validate() {
    if (!question.required) return true;

    if (question.type === "multiple") {
      return answer && answer.length > 0;
    }

    if (question.type === "input") {
      return answer && answer.trim() !== "";
    }

    return answer !== null && answer !== "";
  }

  function handleNext() {
    if (!validate()) {
      setError("This question is required.");
      return;
    }

    setError("");
    onNext(answer);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center px-4"
    >
      <div className="w-full max-w-3xl text-center bg-white/20 backdrop-blur-lg p-10 rounded-3xl shadow-2xl border border-white/20">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent"
        >
          {question.title}
        </motion.h2>

        {/* Description */}
        {question.description && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-gray-600 text-lg max-w-xl mx-auto leading-relaxed"
          >
            {question.description}
          </motion.p>
        )}

        {/* Question Content */}
        <div className="mt-10">
          <QuestionRenderer
            question={question}
            value={answer}
            onChange={setAnswer}
          />
        </div>

        {/* Error */}
        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 text-red-500 font-medium"
          >
            {error}
          </motion.p>
        )}

        {/* Next Button */}
        <div className="mt-10 flex justify-center">
          <motion.button
            whileHover={{
              scale: 1.08,
              boxShadow: "0px 10px 25px rgba(236, 72, 153, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="relative px-10 py-4 text-lg font-semibold text-white rounded-full bg-gradient-to-r from-pink-500 to-purple-600 overflow-hidden"
            onClick={handleNext}
          >
            <span className="relative z-10">Next ✨</span>

            {/* Animated Glow */}
            <motion.span
              className="absolute inset-0 bg-white opacity-20 blur-2xl"
              animate={{ x: ["-100%", "100%"] }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "linear",
              }}
            />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};