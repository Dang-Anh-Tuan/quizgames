import handleBackTestInfoToListTest from "./handleBackTestInfoToListTest.js";

const setHandleLogoInfo = function (infoTestPageEl, root) {
  const logoEl = document.getElementById("logo");
  logoEl.onclick = null;
  logoEl.onclick = async function () {
    await handleBackTestInfoToListTest(infoTestPageEl, root);
  };
};

export default setHandleLogoInfo;
