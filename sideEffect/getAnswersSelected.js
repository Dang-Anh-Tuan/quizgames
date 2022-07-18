import preHandleGetIDAnswer from "../helper/preHandleGetIDAnswer.js";

const getAnswersSelected = function (containerQuestionEl) {
  let answersSelected = [];
  let index = 0;
  containerQuestionEl.forEach((item) => {
    const inputAnswerSelected = item.querySelectorAll("input:checked");

    answersSelected[index] = {
      idQuestion: item.id,
      answer: [],
    };
    inputAnswerSelected.forEach((item) =>
      answersSelected[index].answer.push(preHandleGetIDAnswer(item.id))
    );
    index++;
  });

  return answersSelected;
};

export default getAnswersSelected;
