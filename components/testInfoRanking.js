import { getTop3ByTest } from "../api/resultTest.js";
import testInfoRankRow from "./testInfoRankRow.js";

const testInfoRanking = async function (testId) {
  const topResultTest = await getTop3ByTest(testId);

  const testInfoRankingEl = document.createElement("div");

  testInfoRankingEl.setAttribute("id", "container-ranking");
  testInfoRankingEl.classList.add(
    "px-4",
    "absolute",
    "top-[100px]",
    "w-full",
    "opacity-0",
    "z-[-1]"
  );

  topResultTest[0] &&
    testInfoRankingEl.appendChild(
      testInfoRankRow("/static/images/top1.png", topResultTest[0])
    );

  topResultTest[1] &&
    testInfoRankingEl.appendChild(
      testInfoRankRow("/static/images/top2.png", topResultTest[1])
    );

  topResultTest[2] &&
    testInfoRankingEl.appendChild(
      testInfoRankRow("/static/images/top3.png", topResultTest[2])
    );

  return testInfoRankingEl;
};

export default testInfoRanking;
