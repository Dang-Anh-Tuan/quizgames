import popUpScore from "../components/popUpScore.js";
import checkCorrectAnswer from "../helper/checkCorrectAnswer.js";
import disableAllInputAnswer from "../sideEffect/disableAllInputAnswer.js";
import getAnswersSelected from "../sideEffect/getAnswersSelected.js";
import showCorrectAnswer from "../sideEffect/showCorrectAnswer.js";
import setHandleBtnPopupScore from "./setHandleBtnPopupScore.js";

async function showPopupScore(scoreUser, scoreOfTest) {
  const popUpScoreEl = popUpScore(scoreUser, scoreOfTest);
  document.getElementById("container").appendChild(popUpScoreEl);

  await setHandleBtnPopupScore(popUpScoreEl);
}

const handleSubmit = function (currentTest, idTimer) {
  clearInterval(idTimer);

  const containerQuestionEl = document.querySelectorAll(
    "div[class^='container-question'"
  );

  const answersSelected = getAnswersSelected(containerQuestionEl);

  disableAllInputAnswer();

  const { scoreUser, scoreOfTest } = checkCorrectAnswer(
    answersSelected,
    currentTest.questions
  );

  showPopupScore(scoreUser, scoreOfTest);

  showCorrectAnswer(containerQuestionEl, currentTest);
};

export default handleSubmit;
