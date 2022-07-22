const showCheckAnswer = function (containerQuestionEl, correctAnswersOfUser) {
  containerQuestionEl.forEach((containerQuestion) => {
    const imgTick = containerQuestion.querySelector("#img-tick");
    const imgTime = containerQuestion.querySelector("#img-time");

    if (correctAnswersOfUser.some((item) => item.idQuestion == containerQuestion.id)) {
      imgTick.classList.remove("hidden");
    } else {
      imgTime.classList.remove("hidden");
    }
  });
};

export default showCheckAnswer;
