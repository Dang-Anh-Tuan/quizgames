import { render, unmount } from "../core/core.js";
import saveUser from "../helper/saveUser.js";
import listTestPage from "../pages/listTestPage.js";
import handleClickTestItems from "./handleClickTestItems.js";

const handleClickBtnStart = async function (
  inputName,
  inputEmail,
  loginPageEL,
  root
) {
  const newUser = await saveUser(inputName, inputEmail);

  if (newUser) {
    localStorage.setItem("currentUser", JSON.stringify(newUser));

    const listTestPageEl = await listTestPage();
    render(listTestPageEl, root);

    handleClickTestItems(listTestPageEl, root);

    await unmount(loginPageEL, root);
  }
};

export default handleClickBtnStart;
