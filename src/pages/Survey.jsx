import { useState } from "react";
import { QuestionCard } from "../components/organisms/QuestionCard";

export const Survey = ({ questions, journeyType }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const currentQuestion = questions[currentIndex];

  function handleNext(answer) {
    const updatedAnswers = {
      ...answers,
      [currentQuestion.id]: answer,
    };

    setAnswers(updatedAnswers);

    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      handleSubmit(updatedAnswers);
    }
  }

  function handlePrev() {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  }

  function handleSubmit(finalAnswers) {
    console.log("Journey:", journeyType);
    console.log("Final Answers:", finalAnswers);

    // 🔥 later:
    // insert into supabase
    // then navigate to result page

    alert("Journey Completed!");
  }

  return (
    <div className="survey-container">
      <QuestionCard
        question={currentQuestion}
        initialValue={answers[currentQuestion?.id]}
        onNext={handleNext}
        onPrev={handlePrev}
        isFirstQuestion={currentIndex === 0}
      />
    </div>
  );
};