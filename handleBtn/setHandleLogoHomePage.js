import handleLogoHomePage from "./handleLogoHomePage.js";

const setHandleLogoHomePage = function (listTestPageEl, root) {
  const logoEl = document.getElementById("logo");
  logoEl.onclick = async function () {
    console.log("click");
    await handleLogoHomePage(listTestPageEl, root);
  };
};

export default setHandleLogoHomePage;
