import shuffleArray from "../helper/shuffleArray.js";
import answer from "./answer.js";
import question from "./question.js";

const listQuestion = function (listQuestion) {
  const containerAllQuestion = document.createElement("div");
  containerAllQuestion.classList.add(
    "w-full",
    "lg:w-[66%]",
    "m-auto",
    "pb-[36px]",
    "px-8",
    "bg-white",
    "bg-opacity-90",
    "min-h-[100vh]",
    "dark:bg-dark-white-blur"
  );

  listQuestion.forEach((q, index) => {
    const containerQuestion = document.createElement("div");

    containerQuestion.classList.add("container-question", "mb-8");
    containerQuestion.setAttribute("id", `${q.id}`);
    containerQuestion.appendChild(question(q, index));

    const containerAllAnswer = document.createElement("div");

    containerAllAnswer.classList.add("flex", "flex-col", "w-full");

    const arrayAnswersShuffle = shuffleArray([
      ...q.correctAnswers,
      ...q.incorrectAnswers,
    ]);
    const typeInput = q.correctAnswers.length > 1 ? "checkbox" : "radio";

    arrayAnswersShuffle.forEach((a) => {
      containerAllAnswer.appendChild(answer(a.id, a.content, q.id, typeInput));
    });

    containerQuestion.appendChild(containerAllAnswer);

    containerAllQuestion.appendChild(containerQuestion);
  });

  return containerAllQuestion;
};

export default listQuestion;
