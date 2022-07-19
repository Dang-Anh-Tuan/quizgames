import { createResultTest } from "../api/resultTest.js";
import popUpScore from "../components/popUpScore.js";
import checkCorrectAnswer from "../helper/checkCorrectAnswer.js";
import getCurrentEmail from "../helper/getCurrentEmail.js";
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

  const currentEmail = getCurrentEmail();
  const resultTest = {
    test: currentTest.id,
    email: currentEmail,
    score: scoreUser,
  };
  createResultTest(resultTest)
    .then((data) => console.log(data))
    .catch((e) => console.log(e));

  showPopupScore(scoreUser, scoreOfTest);

  showCorrectAnswer(containerQuestionEl, currentTest);
};

export default handleSubmit;
