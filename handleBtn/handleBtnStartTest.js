import { render, unmount } from "../core/core.js";
import listQuestionPage from "../pages/listQuestionPage.js";
import disabledBtn from "../sideEffect/disabledBtn.js";
import handleBackListQuestionToListTest from "./handleBackListQuestionToListTest.js";
import handleSubmit from "./handleSubmit.js";

const handleBtnStartTest = async function (currentTest, infoTestPageEl, root) {
  const { listQuestionPageEl, idTimer } = listQuestionPage(
    currentTest,
    handleSubmit
  );

  await unmount(infoTestPageEl, root);

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
};

export default handleBtnStartTest;
