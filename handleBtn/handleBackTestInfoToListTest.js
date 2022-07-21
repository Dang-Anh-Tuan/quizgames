import { unmount } from "../core/core.js";
import handleBtnSearch from "./handleBtnSearch.js";
import handleClickTestItems from "./handleClickTestItems.js";
import renderListTestPage from "./renderListTestPage.js";

const handleBackTestInfoToListTest = async function (infoTestPageEl, root) {


  const listTestPageEl = await renderListTestPage(root);
  handleClickTestItems(listTestPageEl, root);

  const btnSearch = document.querySelector("#btn-search");
    btnSearch.onclick = async function () {
      console.log("call");
      await handleBtnSearch(this, listTestPageEl, root);
    };

  await unmount(infoTestPageEl, root);
};

export default handleBackTestInfoToListTest;
