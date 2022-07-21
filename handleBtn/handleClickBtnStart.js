import { unmount } from "../core/core.js";
import saveUser from "../helper/saveUser.js";
import handleBtnSearch from "./handleBtnSearch.js";
import handleClickTestItems from "./handleClickTestItems.js";
import renderListTestPage from "./renderListTestPage.js";

const handleClickBtnStart = async function (
  inputName,
  inputEmail,
  loginPageEL,
  root
) {
  const newUser = await saveUser(inputName, inputEmail);

  if (newUser) {
    localStorage.setItem("currentUser", JSON.stringify(newUser));

    const listTestPageEl = await renderListTestPage(root);

    handleClickTestItems(listTestPageEl, root);

    const btnSearch = document.querySelector("#btn-search");
    btnSearch.onclick = async function () {
      console.log("call");
      await handleBtnSearch(this, listTestPageEl, root);
    };

    await unmount(loginPageEL, root);
  }
};

export default handleClickBtnStart;
