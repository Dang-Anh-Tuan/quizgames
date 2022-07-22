import handleBtnSearch from "./handleBtnSearch.js";

const setHandleBtnSearch = function (listTestPageEl, root) {
  const btnSearch = document.querySelector("#btn-search");
  btnSearch.onclick = async function () {
    await handleBtnSearch(this, listTestPageEl, root);
  };
};

export default setHandleBtnSearch;
