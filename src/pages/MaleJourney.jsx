import JourneyTemplate from "../templates/JourneyTemplate";
import { Survey } from "./Survey";
import { maleQuestions } from "../data/maleQuestions";

const MaleJourney = () => {
  return (
    <JourneyTemplate title="Male Journey">
      <Survey
        questions={maleQuestions}
        journeyType="male"
      />
    </JourneyTemplate>
  );
};

export default MaleJourney;