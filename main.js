import { render } from "./core/core.js";
import handleClickBtnStart from "./handleBtn/handleClickBtnStart.js";
import loginPage from "./pages/loginPage.js";

async function initialApp(root) {
  const loginPageEL = loginPage();
  render(loginPageEL, root);

  const btnStart = document.getElementById("btn-submit");
  const inputName = document.getElementById("input-name");
  const inputEmail = document.getElementById("input-email");
  const errorName = document.getElementById("error-name");
  const errorEmail = document.getElementById("error-email");

  btnStart.onclick = async function () {
    await handleClickBtnStart(
      inputName,
      inputEmail,
      errorName,
      errorEmail,
      loginPageEL,
      root
    );
  };
}

async function main() {
  const root = document.getElementById("container");

  try {
    await initialApp(root);
  } catch {}
}

main();
