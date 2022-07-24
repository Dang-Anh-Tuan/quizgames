import { getTestById } from "../api/tests.api.js";
import { render, unmount } from "../core/core.js";
import infoTestPage from "../pages/infoTestPage.js";
import handleBackTestInfoToListTest from "./handleBackTestInfoToListTest.js";
import handleBtnStartTest from "./handleBtnStartTest.js";
import handleClickCommentBtn from "./handleClickCommentBtn.js";
import handleClickRankingBtn from "./handleClickRankingBtn.js";
import handleSendComment from "./handleSendComment.js";
import renderLoader from "./renderLoader.js";
import setHandleBtnDarkMode from "./setHandleBtnDarkMode.js";
import setHandleLogoInfo from "./setHandleLogoInfo.js";
import setHandleLogoutBtn from "./setHandleLogoutBtn.js";

async function handleTestItemClick(id, listTestPageEl, root) {
  const currentTest = await getTestById(id);

  const loaderEl = renderLoader(root);

  const infoTestPageEl = await infoTestPage(currentTest);

  setTimeout(async () => {
    await unmount(loaderEl, root);
  }, 1000);

  render(infoTestPageEl, root);

  const btnComment = document.getElementById("info-test__btn-comment");
  const btnRanking = document.getElementById("info-test__btn-ranking");
  const btnSendComment = document.getElementById("test-info__btn-send_comment");
  const blockComment = document.getElementById("container-comments");
  const blockRanking = document.getElementById("container-ranking");
  const makerActive = document.getElementById("test-info__after-maker");

  btnSendComment.onclick = async function () {
    await handleSendComment(id);
  };

  btnComment.onclick = function () {
    handleClickCommentBtn(blockComment, blockRanking, makerActive);
  };

  btnRanking.onclick = function () {
    handleClickRankingBtn(blockComment, blockRanking, makerActive);
  };

  const btnStartTest = document.getElementById("test-info__btn-start");
  const btnBack = document.getElementById("info-test__btn-back");

  btnStartTest.onclick = async function () {
    await handleBtnStartTest(currentTest, infoTestPageEl, root);
  };

  btnBack.onclick = async function () {
    await handleBackTestInfoToListTest(infoTestPageEl, root);
  };

  setHandleBtnDarkMode();

  setHandleLogoutBtn(root);

  const logo = document.getElementById("logo");
  logo.onclick = async function () {
    await handleBackTestInfoToListTest(infoTestPageEl, root);
  };

  setHandleLogoInfo(infoTestPageEl, root);

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
