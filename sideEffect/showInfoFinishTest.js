import infoTextRow from "../components/infoTextRow.js";
import convertSecondsToMS from "../helper/convertSecondsToMS.js";

const showInfoFinishTest = function (questionCorrect, questionsOfTest, timeFinish, scoreOfUser) {
  const containerInfoAnswer = document.getElementById("container-info-answer")

  containerInfoAnswer.appendChild(infoTextRow("Question correct", `${questionCorrect.length}/${questionsOfTest.length}`));
  containerInfoAnswer.appendChild(infoTextRow("Time finish", convertSecondsToMS(timeFinish)));
  containerInfoAnswer.appendChild(infoTextRow("Score", scoreOfUser));

};

export default showInfoFinishTest;
