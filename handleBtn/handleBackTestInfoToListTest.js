import { unmount } from "../core/core.js";
import handleClickTestItems from "./handleClickTestItems.js";
import renderListTestPage from "./renderListTestPage.js";

const handleBackTestInfoToListTest = async function (infoTestPageEl, root) {


  const listTestPageEl = await renderListTestPage(root);
  handleClickTestItems(listTestPageEl, root);


  await unmount(infoTestPageEl, root);
};

export default handleBackTestInfoToListTest;
