import preHandleGetIDAnswer from "../helper/preHandleGetIDAnswer.js";

const showCorrectAnswer = function (containerQuestionEl, currentTest) {
  const questionsCurrentTest = currentTest.questions;

  containerQuestionEl.forEach((containerQuesiton) => {
    const labelAnswers = containerQuesiton.querySelectorAll("label");
    const currentQuestionId = containerQuesiton.id;
    const currentQuestionArr = questionsCurrentTest.filter(
      (q) => q.id == currentQuestionId
    );
    const currentQuestion =
      currentQuestionArr.length > 0 ? currentQuestionArr[0] : null;

    if (currentQuestion) {
      const idsCorrect = currentQuestion.correctAnswers.map((item) => item.id);
      labelAnswers.forEach((labelAnswer) => {
        if (
          idsCorrect.includes(
            +preHandleGetIDAnswer(labelAnswer.getAttribute("for"))
          )
        ) {
          labelAnswer.classList.add(
            "bg-success-color",
            "text-white",
            "border-none"
          );
        } else if (labelAnswer.previousElementSibling.checked) {
          labelAnswer.classList.add("bg-failure-color", "border-none");
        }
      });
    }
  });
};

export default showCorrectAnswer;
