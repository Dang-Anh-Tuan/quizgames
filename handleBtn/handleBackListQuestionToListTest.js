import { unmount } from "../core/core.js";
import handleClickTestItems from "./handleClickTestItems.js";
import renderListTestPage from "./renderListTestPage.js";
import setHandleBtnDarkMode from "./setHandleBtnDarkMode.js";
import setHandleBtnSearch from "./setHandleBtnSearch.js";
import setHandleLogoutBtn from "./setHandleLogoutBtn.js";

const handleBackListQuestionToListTest = async function (
  listQuestionPageEl = null,
  idTimer = null,
  root
) {
  idTimer && clearInterval(idTimer);

  if (!listQuestionPageEl) {
    root.innerHTML = "";
  } else {
    await unmount(listQuestionPageEl, root);
  }

  const listTestPageEl = await renderListTestPage(root);

  setHandleBtnSearch(listTestPageEl, root);

  handleClickTestItems(listTestPageEl, root);

  setHandleBtnDarkMode();

  setHandleLogoutBtn(root);
};

export default handleBackListQuestionToListTest;
