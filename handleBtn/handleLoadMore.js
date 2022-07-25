import { getAllTests } from "../api/tests.api.js";
import testItem from "../components/testItem.js";
import { AMOUNT_TEST_PER_PAGE } from "../constant/pagination.js";
import disabledBtn from "../sideEffect/disabledBtn.js";
import handleClickTestItems from "./handleClickTestItems.js";
import setHandleBtnDarkMode from "./setHandleBtnDarkMode.js";
import setHandleLogoHomePage from "./setHandleLogoHomePage.js";

const handleLoadMore = async function (
  btnLoadMore,
  containerListTest,
  currentPage,
  listTestPageEl,
  root
) {

  const newDataTests = await getAllTests({
    page: currentPage,
  });

 
  if (newDataTests.length < AMOUNT_TEST_PER_PAGE) {
    disabledBtn(btnLoadMore);
  }

  newDataTests &&
    newDataTests.forEach((item) => {
      const testItemEl = testItem(item);
      containerListTest.append(testItemEl);
    });

  handleClickTestItems(listTestPageEl, root);

  setHandleBtnDarkMode();

  // setHandleLogoHomePage(listTestPageEl, root);

};

export default handleLoadMore;
