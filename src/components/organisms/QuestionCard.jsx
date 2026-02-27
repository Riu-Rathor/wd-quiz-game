import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Lock } from "lucide-react";
import { QuestionRenderer } from "../molecules/QuestionRenderer";

export const QuestionCard = ({
  question,
  onNext,
  onPrev,
  initialValue,
  isFirstQuestion = false,
}) => {
  const [answer, setAnswer] = useState(
    initialValue ?? getDefaultValue(question.type)
  );
  const [error, setError] = useState("");

  useEffect(() => {
    setAnswer(initialValue ?? getDefaultValue(question.type));
    setError("");
  }, [question, initialValue]);

  function getDefaultValue(type) {
    switch (type) {
      case "multiple":
        return [];
      case "scale":
      case "single":
        return null;
      case "input":
        return "";
      default:
        return null;
    }
  }

  const isValid = useMemo(() => {
    if (!question?.required) return true;

    if (question.type === "multiple") {
      return answer && answer.length > 0;
    }

    if (question.type === "input") {
      return answer && answer.trim() !== "";
    }

    return answer !== null && answer !== "";
  }, [answer, question]);

  function handleNext() {
    if (!isValid) {
      setError("Please answer this required question to unlock the next step.");
      return;
    }

    setError("");
    onNext(answer);
  }

  const buttonBase =
    "relative flex items-center justify-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full overflow-hidden transition-all duration-300";

  const enabledStyle =
    "text-white bg-gradient-to-r from-pink-500 to-purple-600 cursor-pointer";

  const disabledStyle =
    "text-gray-400 bg-gradient-to-r from-gray-400 to-gray-500 cursor-not-allowed opacity-60";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}

      className="min-h-screen flex flex-col px-4 sm:px-6 lg:px-8 py-6 sm:py-8 sm:items-center sm:justify-center sm:pb-8"
    >

      {/* Mobile Layout: Full height with scrollable content */}
      <div className="sm:hidden flex flex-col h-full">
        {/* Fixed Header Section */}
        <div className="flex-shrink-0 text-center bg-white/20 backdrop-blur-lg p-6 rounded-t-2xl shadow-2xl border border-white/20 border-b-0">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent px-2"
          >
            {question.title}
          </motion.h2>

          {/* Description */}
          {question.description && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-3 text-gray-600 text-base max-w-sm mx-auto leading-relaxed px-2"
            >
              {question.description}
            </motion.p>
          )}
        </div>

        {/* Scrollable Content Section */}
        <div className="flex-1 overflow-y-auto bg-white/20 backdrop-blur-lg border-x border-white/20 px-6 py-4">
          <div className="min-h-full flex flex-col">
            {/* Question Content */}
            <div className="flex-1">
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
                className="mt-6 text-red-500 font-medium text-center"
              >
                {error}
              </motion.p>
            )}
            
            {/* Extra padding at bottom to ensure content doesn't get cut off */}
            <div className="h-4"></div>
          </div>
        </div>

        {/* Fixed Bottom Section */}
        <div className="flex-shrink-0 bg-white/20 backdrop-blur-lg border border-white/20 border-t-0 p-4 rounded-b-2xl shadow-2xl">
          <div className="flex gap-3">
            {!isFirstQuestion && (
              <button
                onClick={onPrev}
                className="flex-1 py-3 rounded-full font-semibold bg-gradient-to-r from-pink-500 to-purple-600 text-white"
              >
                Previous
              </button>
            )}

            <button
              onClick={isValid ? handleNext : undefined}
              disabled={!isValid}
              className="flex-1 py-3 rounded-full font-semibold transition-all duration-300 bg-gradient-to-r from-pink-500 to-purple-600 text-white disabled:bg-gray-400 disabled:text-gray-200 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <span className="flex items-center justify-center gap-2">
                {!isValid && <Lock size={18} />}
                Next
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Desktop/Tablet Layout: Original centered design */}
      <div className="hidden sm:block w-full max-w-sm sm:max-w-2xl lg:max-w-3xl text-center bg-white/20 backdrop-blur-lg p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-2xl border border-white/20">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent px-2"
        >
          {question.title}
        </motion.h2>

        {/* Description */}
        {question.description && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-3 sm:mt-4 text-gray-600 text-base sm:text-lg max-w-sm sm:max-w-xl mx-auto leading-relaxed px-2"
          >
            {question.description}
          </motion.p>
        )}

        {/* Question Content */}
        <div className="mt-6 sm:mt-8 lg:mt-10">
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

        {/* Desktop / Tablet Buttons */}
        <div className="flex mt-8 justify-center gap-4">
          {!isFirstQuestion && (
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className={`${buttonBase} ${enabledStyle}`}
              onClick={onPrev}
            >
              Previous
            </motion.button>
          )}

          <motion.button
            whileHover={isValid ? { scale: 1.08 } : {}}
            whileTap={isValid ? { scale: 0.95 } : {}}
            className={`${buttonBase} ${
              isValid ? enabledStyle : disabledStyle
            }`}
            onClick={isValid ? handleNext : undefined}
            disabled={!isValid}
          >
            <span className="flex items-center justify-center gap-2">
              {!isValid && <Lock size={18} className="text-yellow-400" />}
              Next
            </span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};
