const checkCorrectAnswer = function (answerSelected, questionsOfTest) {
  let scoreUser = 0;
  let scoreOfTest = 0;

  const correctArray = preHandleCorrectArray(questionsOfTest);

  const correctAnswersOfUser = answerSelected.filter((answerOfUser) =>
    correctArray.some(
      (answer) =>
        answer.id == answerOfUser.idQuestion &&
        compareTwoArray(answer.correctAnswers, answerOfUser.answer)
    )
  );

  questionsOfTest.forEach((question) => {
    scoreOfTest += question.score;

    if (correctAnswersOfUser.some((item) => item.idQuestion == question.id))
      scoreUser += question.score;
  });

  return {scoreUser, scoreOfTest, correctAnswersOfUser}
};

const preHandleCorrectArray = function (questionsOfTest) {
  return questionsOfTest.map((item) => ({
    id: item.id,
    correctAnswers: item.correctAnswers.map((item) => item.id),
  }));
};

const compareTwoArray = function (array1, array2) {
  array1 = array1 === undefined ? [] : array1;

  if (array1.length !== array2.length) return false;

  for (const item of array1) {
    if (!array2.includes(`${item}`)) return false;
  }

  return true;
};

export default checkCorrectAnswer;
