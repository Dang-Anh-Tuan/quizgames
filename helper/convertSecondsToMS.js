const convertSecondsToMS = function (totalSeconds) {
  let second = totalSeconds % 60;
  let minute = (totalSeconds - second) / 60;

  second = checkTime(second);
  minute = checkTime(minute);

  return `${minute} : ${second}`;
};

const checkTime = function (time) {
  return time < 10 ? `0${time}` : time;
};

export default convertSecondsToMS;
