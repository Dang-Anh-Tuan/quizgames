import { unmount } from "../core/core.js";
import handleClickTestItems from "./handleClickTestItems.js";
import renderListTestPage from "./renderListTestPage.js";

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
  handleClickTestItems(listTestPageEl, root);
};

export default handleBackListQuestionToListTest;
