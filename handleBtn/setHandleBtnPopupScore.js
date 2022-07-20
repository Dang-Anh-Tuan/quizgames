import { render, unmount } from "../core/core.js";
import listTestPage from "../pages/listTestPage.js";
import handleClickTestItems from "./handleClickTestItems.js";

async function handleClosePopup(popUpScoreEl) {
  await unmount(popUpScoreEl, document.getElementById("container"));
}

const setHandleBtnPopupScore = async function (popUpScoreEl, idTimer = null) {
  const btnBackPopupScore = document.getElementById(
    "popup-result__back-list-test"
  );
  const btnClosePopupScore = document.getElementById("popup-result__btn-close");

  btnBackPopupScore.onclick = async function () {
    if (idTimer) clearInterval(idTimer);

    const root = document.getElementById("container");
    root.innerHTML = "";
    const listTestPageEl = await listTestPage();

    render(listTestPageEl, root);
    handleClickTestItems(listTestPageEl, root);
  };

  btnClosePopupScore.onclick = async function () {
    await handleClosePopup(popUpScoreEl);
  };
};

export default setHandleBtnPopupScore;
