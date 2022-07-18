const disableAllInputAnswer = function () {
  const inputAnswers = document.querySelectorAll(".input-answer");

  inputAnswers.forEach((inputAnswer) => {
    inputAnswer.disabled = true;
    inputAnswer.nextElementSibling.classList.remove(
      "hover:border-[#b4e0ff]",
      "cursor-pointer"
    );
  });
};

export default disableAllInputAnswer;
