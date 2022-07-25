import { getAllTests } from "../api/tests.api.js";
import { render, unmount } from "../core/core.js";
import listTestPage from "../pages/listTestPage.js";
import disabledBtn from "../sideEffect/disabledBtn.js";
import handleClickTestItems from "./handleClickTestItems.js";
import renderLoader from "./renderLoader.js";
import setHandleBtnDarkMode from "./setHandleBtnDarkMode.js";
import setHandleBtnSearch from "./setHandleBtnSearch.js";
import setHandleLogoHomePage from "./setHandleLogoHomePage.js";
import setHandleLogoutBtn from "./setHandleLogoutBtn.js";

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

  const loaderEl = renderLoader(root)

  const listTestPageElNew = await listTestPage(listTestData);
  render(listTestPageElNew, root);

  setTimeout(async () => {
    await unmount(loaderEl, root)
  }, 500)


  handleClickTestItems(listTestPageElNew, root);

  disabledBtn(document.getElementById("list-test__btn-load"));

  setHandleBtnSearch(listTestPageElNew, root);

  // setHandleLogoHomePage(listTestPageElNew, root);

  setHandleBtnDarkMode();

  setHandleLogoutBtn(root);

};

export default handleBtnSearch;
