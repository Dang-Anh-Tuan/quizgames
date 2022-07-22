import { unmount } from "../core/core.js";
import saveUser from "../helper/saveUser.js";
import handleBtnSearch from "./handleBtnSearch.js";
import handleClickTestItems from "./handleClickTestItems.js";
import handleLogoHomePage from "./handleLogoHomePage.js";
import renderListTestPage from "./renderListTestPage.js";
import renderLoader from "./renderLoader.js";
import setHandleBtnDarkMode from "./setHandleBtnDarkMode.js";
import setHandleBtnSearch from "./setHandleBtnSearch.js";
import setHandleLogoHomePage from "./setHandleLogoHomePage.js";
import setHandleLogoutBtn from "./setHandleLogoutBtn.js";

const handleClickBtnStart = async function (
  inputName,
  inputEmail,
  loginPageEL,
  root
) {
  const loaderEl = renderLoader(root)


  const newUser = await saveUser(inputName, inputEmail);

  if (newUser) {
    localStorage.setItem("currentUser", JSON.stringify(newUser));

    const listTestPageEl = await renderListTestPage(root);

    setTimeout(async () => {
      await unmount(loaderEl, root)
    }, 1000)

    handleClickTestItems(listTestPageEl, root);

    setHandleBtnSearch(listTestPageEl, root);

    setHandleLogoHomePage(listTestPageEl, root);

    setHandleBtnDarkMode();

    setHandleLogoutBtn(root);

    await unmount(loginPageEL, root);
  }
};

export default handleClickBtnStart;
