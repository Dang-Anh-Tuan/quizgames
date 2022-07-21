import navBar from "../components/navBar.js";
import testInfoContent from "../components/testInfoContent.js";
import testInfoSideBar from "../components/testInfoSideBar.js";

const infoTestPage = async function (currentTest) {
  const infoTestPageEl = document.createElement("div");

  infoTestPageEl.appendChild(navBar());

  const containerTestInfoPageEl = document.createElement("div");
  containerTestInfoPageEl.classList.add(
    "relative",
    "max-w-[1200px]",
    "lg:flex",
    "m-auto",
    "gap-3",
    "py-[100px]"
  );

  containerTestInfoPageEl.appendChild(testInfoContent(currentTest));
  containerTestInfoPageEl.appendChild(await testInfoSideBar(currentTest));

  infoTestPageEl.appendChild(containerTestInfoPageEl);

  return infoTestPageEl;
};

export default infoTestPage;
