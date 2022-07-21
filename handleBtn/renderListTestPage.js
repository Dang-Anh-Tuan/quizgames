import { getAllTests } from "../api/tests.api.js";
import { render } from "../core/core.js";
import listTestPage from "../pages/listTestPage.js";
import handleLoadMore from "./handleLoadMore.js";

const renderListTestPage = async function(root) {
  let currentPage = 1;
  const listTestData = await getAllTests({
    page: currentPage,
  });

  const listTestPageEl = await listTestPage(listTestData);
  render(listTestPageEl, root);

  const btnLoadMore = document.getElementById("list-test__btn-load");
  const containerListTest = document.getElementById(
    "list-test__block-list-test"
  );

  btnLoadMore.onclick = async function () {
    await handleLoadMore(this, containerListTest, ++currentPage);
  };

  return listTestPageEl
}

export default renderListTestPage