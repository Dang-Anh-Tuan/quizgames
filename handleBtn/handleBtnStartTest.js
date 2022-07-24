import { render, unmount } from "../core/core.js";
import listQuestionPage from "../pages/listQuestionPage.js";
import handleBtnQuitTest from "./handleBtnQuitTest.js";
import handleSubmit from "./handleSubmit.js";
import renderLoader from "./renderLoader.js";
import setHandleBtnDarkMode from "./setHandleBtnDarkMode.js";
import setHandleLogoListQuestion from "./setHandleLogoListQuestion.js";
import setHandleLogoutBtn from "./setHandleLogoutBtn.js";

const handleBtnStartTest = async function (currentTest, infoTestPageEl, root) {
  const loaderEl = renderLoader(root);

  const { listQuestionPageEl, idTimer } = listQuestionPage(
    currentTest,
    handleSubmit
  );

  await unmount(infoTestPageEl, root);

  setTimeout(async () => {
    await unmount(loaderEl, root);
  }, 300);

  render(listQuestionPageEl, root);

  const btnSubmit = document.getElementById("btn-submit-test");
  btnSubmit.onclick = function () {
    handleSubmit(currentTest, idTimer);
  };

  const btnBack = document.getElementById("info-test__btn-back");
  btnBack.onclick = async function () {
    await handleBtnQuitTest(idTimer);
  };

  setHandleBtnDarkMode();

  setHandleLogoutBtn(root, idTimer);

  setHandleLogoListQuestion(listQuestionPageEl, idTimer, root);
};

export default handleBtnStartTest;
