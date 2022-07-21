import { getAllTests } from "../api/tests.api.js";
import { render, unmount } from "../core/core.js";
import listTestPage from "../pages/listTestPage.js";
import handleClickTestItems from "./handleClickTestItems.js";

const handleBtnSearch = async function (btnSearch, listTestPageEl, root) {
  const levelSearch = document.querySelector("#select-level").value;
  const keywordSearch = document.querySelector("#search-input").value;

  const containerListTest = document.getElementById(
    "list-test__block-list-test"
  );

  containerListTest.innerHTML = ``;

  const listTestData = await getAllTests({
    search: {
      field: "name",
      keyword: keywordSearch,
    },
    level: levelSearch,
  });

  await unmount(listTestPageEl, root);
  const listTestPageElNew = await listTestPage(listTestData);
  render(listTestPageElNew, root);

  handleClickTestItems(listTestPageElNew, root);

  document.querySelector("#btn-search").onclick = async function () {
    
    await handleBtnSearch(this, listTestPageElNew, root);
  };
};

export default handleBtnSearch;
