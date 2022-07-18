import { render, unmount } from "../core/core.js";
import listTestPage from "../pages/listTestPage.js";
import handleClickTestItems from "./handleClickTestItems.js";

const handleBackListQuestionToListTest = async function (
  listQuestionPageEl,
  root,
  idTimer
) {
  clearInterval(idTimer);

  const listTestPageEl = await listTestPage();

  render(listTestPageEl, root);
  handleClickTestItems(listTestPageEl, root);

  await unmount(listQuestionPageEl, root);
};

export default handleBackListQuestionToListTest;
