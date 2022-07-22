import handleClock from "../helper/handleClock.js";
import infoAnswerButtonBack from "./infoAnswerButtonBack.js";
import infoAnswerButtonSubmit from "./infoAnswerButtonSubmit.js";
import infoAnswerHeading from "./infoAnswerHeading.js";
import infoTextRow from "./infoTextRow.js";

const infoAnswer = function (test, handleSubmit) {
  const infoAnswerEl = document.createElement("div");

  infoAnswerEl.classList.add(
    "relative",
    "xl:sticky",
    "shadow-2xl",
    "rounded-[25px]",
    "h-fit",
    "xl:w-[32%]",
    "top-[36px]",
    "xl:top-[100px]",
    "right-0",
    "pb-[50px]",
    "mb-[50px]",
    "mr-3",
    "ml-3",
    "dark:bg-dark-white-blur"
  );

  infoAnswerEl.appendChild(infoAnswerHeading());

  const containerContentInfo = document.createElement("div");

  containerContentInfo.classList.add("px-8");
  containerContentInfo.setAttribute('id', "container-info-answer");

  containerContentInfo.appendChild(infoTextRow("Test name", test.name));
  containerContentInfo.appendChild(
    infoTextRow("Time", `${test.timeAnswerMinute} minutes`)
  );

  function renderClock(time) {
    const infoTimer = containerContentInfo.querySelector("div[class$='timer']");
    if (infoTimer) {
      containerContentInfo.removeChild(infoTimer);
    }
    containerContentInfo.appendChild(infoTextRow("Time remaining", time, true));
  }

  const timeAnswerSecond = test.timeAnswerMinute * 60;
  const idTimer = handleClock(
    renderClock,
    timeAnswerSecond,
    handleSubmit,
    test
  );

  infoAnswerEl.appendChild(containerContentInfo);

  infoAnswerEl.appendChild(infoAnswerButtonSubmit());

  infoAnswerEl.appendChild(infoAnswerButtonBack());

  return { infoAnswerEl, idTimer };
};

export default infoAnswer;
