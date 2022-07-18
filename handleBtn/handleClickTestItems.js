import { getTestById } from "../api/tests.api.js";
import { render, unmount } from "../core/core.js";
import listQuestionPage from "../pages/listQuestionPage.js";
import disabledBtn from "../sideEffect/disabledBtn.js";
import handleBackListQuestionToListTest from "./handleBackListQuestionToListTest.js";
import handleSubmit from "./handleSubmit.js";

async function handleTestItemClick(id, listTestPageEl, root) {
  const currentTest = await getTestById(id);
  const { listQuestionPageEl, idTimer } = listQuestionPage(
    currentTest,
    handleSubmit
  );

  render(listQuestionPageEl, root);


  const btnSubmit = document.getElementById("btn-submit-test");
  btnSubmit.onclick = function () {
    handleSubmit(currentTest, idTimer);
    disabledBtn(this);
  };

  const btnBack = document.getElementById("info-test__btn-back");
  btnBack.onclick = async function () {
    await handleBackListQuestionToListTest(listQuestionPageEl, root, idTimer);
  };

  await unmount(listTestPageEl, root);
}

const handleClickTestItems = function (listTestPageEl, root) {
  const testItems = document.querySelectorAll(".test-item");
  for (const testItem of testItems) {
    testItem.onclick = async function () {
      await handleTestItemClick(testItem.id, listTestPageEl, root);
    };
  }
};

export default handleClickTestItems;
