import JourneyTemplate from "../templates/JourneyTemplate";
import { Survey } from "./Survey";
import { femaleQuestions } from "../data/femaleQuestions";

const FemaleJourney = () => {
  return (
    <JourneyTemplate title="Female Journey">
      <Survey
        questions={femaleQuestions}
        journeyType="female"
      />
    </JourneyTemplate>
  );
};

export default FemaleJourney;