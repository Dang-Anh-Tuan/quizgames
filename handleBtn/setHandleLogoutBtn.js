import initialApp from "./initialApp.js";

const setHandleLogoutBtn = function (root, idTimmer) {
  const btnLogout = document.getElementById("btn-log-out");
  btnLogout.onclick = function () {
    root.innerHTML = "";
    idTimmer && clearInterval(idTimmer)
    initialApp(root);
  };
};

export default setHandleLogoutBtn;
