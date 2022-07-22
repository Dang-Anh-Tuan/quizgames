const calculateTimeFinish = function (timeOfTest) {
  const timeStop = document
    .querySelector("p.text-red-400")
    .textContent.trim()
    .replaceAll(" ", "")
    .split(":");

  const timeStopSecond = timeStop[0] * 60 + +timeStop[1];
  const timeFinishTest = timeOfTest * 60 - timeStopSecond;

  return timeFinishTest;
};

export default calculateTimeFinish;
