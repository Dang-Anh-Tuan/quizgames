const getCurrentEmail = function () {
  return JSON.parse(localStorage.getItem("currentUser")).email;
};

export default getCurrentEmail;
