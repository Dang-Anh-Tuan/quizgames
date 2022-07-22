import { unmount } from "../core/core.js";
import handleClickTestItems from "./handleClickTestItems.js";
import renderListTestPage from "./renderListTestPage.js";
import renderLoader from "./renderLoader.js";
import setHandleBtnDarkMode from "./setHandleBtnDarkMode.js";
import setHandleBtnSearch from "./setHandleBtnSearch.js";
import setHandleLogoutBtn from "./setHandleLogoutBtn.js";

const handleBackTestInfoToListTest = async function (infoTestPageEl, root) {
  const loaderEl = renderLoader(root);

  setTimeout(async () => {
    await unmount(loaderEl, root)
  }, 1000)

  const listTestPageEl = await renderListTestPage(root);
  handleClickTestItems(listTestPageEl, root);

  setHandleBtnSearch(listTestPageEl, root);

  setHandleBtnDarkMode();

  setHandleLogoutBtn(root);


  await unmount(infoTestPageEl, root);
};

export default handleBackTestInfoToListTest;
