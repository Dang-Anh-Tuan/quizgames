import { render, unmount } from "../core/core.js";
import listTestPage from "../pages/listTestPage.js";
import handleClickTestItems from "./handleClickTestItems.js";

const handleBackTestInfoToListTest = async function (infoTestPageEl, root) {
  const listTestPageEl = await listTestPage();

  render(listTestPageEl, root);
  handleClickTestItems(listTestPageEl, root);

  await unmount(infoTestPageEl, root);
};

export default handleBackTestInfoToListTest;
