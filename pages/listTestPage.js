import { getAllTests } from "../api/tests.api.js";
import listTest from "../components/listTest.js";
import navBar from "../components/navBar.js";

const listTestPage = async function () {
  const listTestData = await getAllTests();
  const listTestPageEl = document.createElement("div");

  listTestPageEl.append(navBar());
  listTestPageEl.append(listTest(listTestData));

  // const testItems = document.querySelectorAll(".test-item");
  // console.log(testItems);
  // for (const testItem of testItems) {
  //   testItem.onclick = async function () {
  //     console.log("call");
  //     await handleTestItemClick(testItem.id, listTestPageEl, root);
  //   };
  // }


  return listTestPageEl;
};

export default listTestPage;
