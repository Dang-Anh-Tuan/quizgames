import { unmount } from "../core/core.js";
import handleBackListQuestionToListTest from "./handleBackListQuestionToListTest.js";

async function handleClosePopup(popUpScoreEl) {
  await unmount(popUpScoreEl, document.getElementById("container"));
}

const setHandleBtnPopupScore = async function (popUpScoreEl, idTimer = null) {
  const btnBackPopupScore = document.getElementById(
    "popup-result__back-list-test"
  );
  const btnClosePopupScore = document.getElementById("popup-result__btn-close");

  btnBackPopupScore.onclick = async function () {
    const root = document.getElementById("container");

    handleBackListQuestionToListTest(null, idTimer, root);
  };

  btnClosePopupScore.onclick = async function () {
    await handleClosePopup(popUpScoreEl);
  };
};

export default setHandleBtnPopupScore;
