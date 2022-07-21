import btnLoadMore from "../components/btnLoadMore.js";
import filterBar from "../components/filterBar.js";
import listTest from "../components/listTest.js";
import navBar from "../components/navBar.js";

const listTestPage = async function (listTestData) {
  const listTestPageEl = document.createElement("div");

  listTestPageEl.append(navBar());

  listTestPageEl.appendChild(filterBar());
  listTestPageEl.append(listTest(listTestData));
  listTestPageEl.appendChild(btnLoadMore());
  return listTestPageEl;
};

export default listTestPage;
