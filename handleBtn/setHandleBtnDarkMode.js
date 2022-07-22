const setHandleBtnDarkMode = function () {
  const btnDarkMode = document.getElementById("btn-dark-mode");
  const htmlEl = document.querySelector("html");
  btnDarkMode.onclick = function () {
    htmlEl.classList.toggle("dark");
  };
};

export default setHandleBtnDarkMode;
