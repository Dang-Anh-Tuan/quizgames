import { getTestById } from "./api/tests.api.js";
import popUpScore from "./components/popUpScore.js";
import checkCorrectAnswer from "./helper/checkCorrectAnswer.js";
import saveUser from "./helper/saveUser.js";
import listQuestionPage from "./pages/listQuestionPage.js";
import listTestPage from "./pages/listTestPage.js";
import loginPage from "./pages/loginPage.js";
import disableAllInputAnswer from "./sideEffect/disableAllInputAnswer.js";
import disabledBtn from "./sideEffect/disabledBtn.js";
import getAnswersSelected from "./sideEffect/getAnswersSelected.js";
import showCorrectAnswer from "./sideEffect/showCorrectAnswer.js";

function render(element, root) {
  root.appendChild(element);
}

async function unmount(element, root) {
  root.removeChild(element);
}

async function initialApp(root) {
  const loginPageEL = loginPage();
  render(loginPageEL, root);

  const btnStart = document.getElementById("btn-submit");
  const inputName = document.getElementById("input-name");
  const inputEmail = document.getElementById("input-email");

  btnStart.onclick = async function () {
    await handleClickBtnStart(inputName, inputEmail, loginPageEL, root);
  };
}

function handleClickTestItems(listTestPageEl, root) {
  const testItems = document.querySelectorAll(".test-item");
  for (const testItem of testItems) {
    testItem.onclick = async function () {
      await handleTestItemClick(testItem.id, listTestPageEl, root);
    };
  }
}

async function handleClickBtnStart(inputName, inputEmail, loginPageEL, root) {
  saveUser(inputName, inputEmail);

  const listTestPageEl = await listTestPage();
  render(listTestPageEl, root);

  handleClickTestItems(listTestPageEl, root);

  await unmount(loginPageEL, root);
}

async function handleClosePopup(popUpScoreEl) {
  popUpScoreEl.classList.add("hidden");
  await unmount(popUpScoreEl, document.getElementById("container"))
}

async function setHandleBtnPopupScore(popUpScoreEl) {
  const btnBackPopupScore = document.getElementById(
    "popup-result__back-list-test"
  );
  const btnClosePopupScore = document.getElementById("popup-result__btn-close");

  btnBackPopupScore.onclick = async function () {
    const root = document.getElementById("container");
    root.innerHTML = "";
    const listTestPageEl = await listTestPage();

    render(listTestPageEl, root);
    handleClickTestItems(listTestPageEl, root);
  };

  btnClosePopupScore.onclick = async function () {
    await handleClosePopup(popUpScoreEl);
  };
}

async function showPopupScore(scoreUser, scoreOfTest) {
  const popUpScoreEl = popUpScore(scoreUser, scoreOfTest);
  document.getElementById("container").appendChild(popUpScoreEl);

  await setHandleBtnPopupScore(popUpScoreEl);
}

function handleSubmit(currentTest, idTimer) {
  clearInterval(idTimer);

  const containerQuestionEl = document.querySelectorAll(
    "div[class^='container-question'"
  );

  const answersSelected = getAnswersSelected(containerQuestionEl);

  disableAllInputAnswer();

  const { scoreUser, scoreOfTest } = checkCorrectAnswer(
    answersSelected,
    currentTest.questions
  );

  showPopupScore(scoreUser, scoreOfTest);

  showCorrectAnswer(containerQuestionEl, currentTest);
}

async function handleBackListQuestionToListTest(
  listQuestionPageEl,
  root,
  idTimer
) {
  clearInterval(idTimer);

  const listTestPageEl = await listTestPage();

  render(listTestPageEl, root);
  handleClickTestItems(listTestPageEl, root);

  await unmount(listQuestionPageEl, root);
}

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

async function main() {
  const root = document.getElementById("container");

  try {
    await initialApp(root);
  } catch {}
}

main();
