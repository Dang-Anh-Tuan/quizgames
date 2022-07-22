const disableAllInputAnswer = function () {
  const inputAnswers = document.querySelectorAll(".input-answer");

  inputAnswers.forEach((inputAnswer) => {
    inputAnswer.disabled = true;
    inputAnswer.nextElementSibling.classList.remove(
      "hover:border-[#b4e0ff]",
      "cursor-pointer",
      "dark:hover:border-[#f49548]"
    );
  });
};

export default disableAllInputAnswer;
