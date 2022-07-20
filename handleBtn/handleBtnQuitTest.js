import popUpQuitTest from "../components/popUpQuitTest.js";
import setHandleBtnPopupScore from "./setHandleBtnPopupScore.js";

async function showPopupQuitTest(idTimer) {
  const popUpQuitTestEl = popUpQuitTest();
  document.getElementById("container").appendChild(popUpQuitTestEl);

  await setHandleBtnPopupScore(popUpQuitTestEl, idTimer);
}

const handleBtnQuitTest = async function (idTimer) {
  await showPopupQuitTest(idTimer);
};

export default handleBtnQuitTest;
