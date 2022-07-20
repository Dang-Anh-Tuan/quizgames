import loginPage from "../pages/loginPage.js";
import { render } from "../core/core.js";
import validateFiled from "../helper/validateFiled.js";
import handleClickBtnStart from "./handleClickBtnStart.js";
import { MSG_EMAIL_ERROR, MSG_NAME_ERROR } from "../constant/validate.js";

async function initialApp(root) {
  const loginPageEL = loginPage();
  render(loginPageEL, root);

  const btnStart = document.getElementById("btn-submit");
  const inputNameEl = document.getElementById("input-name");
  const inputEmailEl = document.getElementById("input-email");
  const errorName = document.getElementById("error-name");
  const errorEmail = document.getElementById("error-email");

  const regexName = /^[A-Za-z]+$/g;
  const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  inputNameEl.onblur = function () {
    const msgError = validateFiled(
      inputNameEl.value,
      regexName,
      MSG_NAME_ERROR
    );
    console.log(msgError);
    errorName.textContent = msgError;
  };

  inputEmailEl.onblur = function () {
    const msgError = validateFiled(
      inputEmailEl.value,
      regexEmail,
      MSG_EMAIL_ERROR
    );
    errorEmail.textContent = msgError;
  };

  btnStart.onclick = async function () {
    await handleClickBtnStart(
      inputNameEl.value,
      inputEmailEl.value,
      loginPageEL,
      root
    );
  };
}

export default initialApp;
