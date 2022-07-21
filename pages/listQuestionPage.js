import infoAnswer from "../components/infoAnswer.js";
import listQuestion from "../components/listQuestion.js";
import navBar from "../components/navBar.js";

const listQuestionPage = function (currentTest, handleSubmit) {
  const listQuestionPageEl = document.createElement("div");

  listQuestionPageEl.appendChild(navBar());

  const containerQuestionPageEl = document.createElement("div");
  containerQuestionPageEl.classList.add(
    "relative",
    "max-w-[1200px]",
    "flex",
    "flex-col-reverse",
    "lg:flex-row",
    "m-auto",
    "gap-3",
    "pt-[100px]"
  );

  const { infoAnswerEl, idTimer } = infoAnswer(currentTest, handleSubmit);

  containerQuestionPageEl.appendChild(listQuestion(currentTest.questions));
  containerQuestionPageEl.appendChild(infoAnswerEl);

  listQuestionPageEl.appendChild(containerQuestionPageEl);

  return { listQuestionPageEl, idTimer };
};

export default listQuestionPage;
