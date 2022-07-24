import handleBackListQuestionToListTest from "./handleBackListQuestionToListTest.js";

const setHandleLogoListQuestion = function (listQuestionPageEl, idTimer, root) {
  const logoEl = document.getElementById("logo");
  logoEl.onclick = null;
  logoEl.onclick = async function () {
    await handleBackListQuestionToListTest(listQuestionPageEl, idTimer, root);
  };
};

export default setHandleLogoListQuestion;
