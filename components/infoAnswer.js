import handleClock from "../helper/handleClock.js";
import infoAnswerButtonBack from "./infoAnswerButtonBack.js";
import infoAnswerButtonSubmit from "./infoAnswerButtonSubmit.js";
import infoAnswerHeading from "./infoAnswerHeading.js";
import infoTextRow from "./infoTextRow.js";

const infoAnswer = function (test, handleSubmit) {
  const infoAnswerEl = document.createElement("div");

  infoAnswerEl.classList.add(
    "sticky",
    "shadow-2xl",
    "rounded-[25px]",
    "h-fit",
    "lg:w-[32%]",
    "top-[36px]",
    "right-0",
    "pb-[50px]",
    "mt-9"
  );

  infoAnswerEl.appendChild(infoAnswerHeading());

  const containerContentInfo = document.createElement("div");

  containerContentInfo.classList.add("px-8");

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  containerContentInfo.appendChild(infoTextRow("Name", currentUser.name));
  containerContentInfo.appendChild(infoTextRow("Email", currentUser.email));
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

  // containerContentInfo.appendChild(infoTextRow("Test name", "59:00", true));

  infoAnswerEl.appendChild(containerContentInfo);

  infoAnswerEl.appendChild(infoAnswerButtonSubmit());

  infoAnswerEl.appendChild(infoAnswerButtonBack());

  return { infoAnswerEl, idTimer };
};

export default infoAnswer;
