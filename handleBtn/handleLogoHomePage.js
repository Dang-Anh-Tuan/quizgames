import { unmount } from "../core/core.js";
import handleClickTestItems from "./handleClickTestItems.js";
import renderListTestPage from "./renderListTestPage.js";
import setHandleBtnSearch from "./setHandleBtnSearch.js";
import setHandleLogoHomePage from "./setHandleLogoHomePage.js";

const handleLogoHomePage = async function (listTestPageEl, root) {
  const listTestPageNewEl = await renderListTestPage(root);

  handleClickTestItems(listTestPageNewEl, root);

  setHandleBtnSearch(listTestPageNewEl, root);

  // setHandleLogoHomePage(listTestPageNewEl, root);

  await unmount(listTestPageEl, root);
};

export default handleLogoHomePage;
