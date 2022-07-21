const getCurrentName = function () {
  return JSON.parse(localStorage.getItem("currentUser")).name;
};

export default getCurrentName;
