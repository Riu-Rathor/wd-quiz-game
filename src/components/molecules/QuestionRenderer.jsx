import { RadioOption } from "../atoms/RadioOption";
import { CardOption } from "../atoms/CardOption";
import { ScaleOption } from "../atoms/ScaleOption";
import { TextInput } from "../atoms/TextInput";
import { motion } from "framer-motion";

export const QuestionRenderer = ({ question, value, onChange }) => {
  switch (question.type) {
    case "input":
      return (
        <TextInput
          value={value || ""}
          placeholder={question.placeholder}
          onChange={onChange}
        />
      );

    case "single":
      return (
        <div className="flex flex-col gap-4 mt-6">
          {question.options?.map((option) => (
            <RadioOption
              key={option.id}
              label={option.label}
              checked={value === option.value}
              onChange={() => onChange(option.value)}
            />
          ))}
        </div>
      );

    case "multiple":
      return (
        <div className="mt-6 flex flex-wrap justify-center gap-4">
  {question.options.map((option, index) => {
    const isChecked = value?.includes(option.value);

    return (
      <motion.div
        key={option.id}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          delay: index * 0.05, // stagger effect
          type: "spring",
          stiffness: 300,
        }}
      >
        <CardOption
          label={option.label}
          description={option.description}
          checked={isChecked}
          onClick={() => {
            if (isChecked) {
              onChange(value.filter((v) => v !== option.value));
            } else {
              onChange([...(value || []), option.value]);
            }
          }}
        />
      </motion.div>
    );
  })}
</div>
      );

    case "scale":
      const numbers = Array.from(
        { length: question.max - question.min + 1 },
        (_, i) => question.min + i
      );

      return (
        <div className="flex justify-center gap-4 mt-6">
          {numbers.map((num) => (
            <ScaleOption
              key={num}
              value={num}
              selected={value === num}
              onClick={() => onChange(num)}
            />
          ))}
        </div>
      );

    default:
      return null;
  }
};