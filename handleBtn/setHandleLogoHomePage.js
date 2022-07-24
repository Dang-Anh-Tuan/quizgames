import handleLogoHomePage from "./handleLogoHomePage.js";

const setHandleLogoHomePage = function (listTestPageEl, root) {
  const logoEl = document.getElementById("logo");
  logoEl.onclick = null;
  logoEl.onclick = async function () {
    await handleLogoHomePage(listTestPageEl, root);
  };
};

export default setHandleLogoHomePage;
