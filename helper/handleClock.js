import convertSecondsToMS from "./convertSecondsToMS.js";

const handleClock = function (renderClock, seconds, handleSubmit, currentTest) {
  
  renderClock(convertSecondsToMS(seconds));
  const idTimer = setInterval(() => {
    renderClock(convertSecondsToMS(seconds--));

    if (seconds === -1) {
      handleSubmit(currentTest, idTimer)
    }
  }, 1000);

  return idTimer;
};

export default handleClock;
