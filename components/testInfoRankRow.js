const testInfoRankRow = function (imageUrl, ranking) {
  const testInfoRankRowEl = document.createElement("div");

  testInfoRankRowEl.classList.add(
    "flex",
    "h-[50px]",
    "border-b-[1px]",
    "border-gray-300",
    "items-center",
    "justify-between",
    "px-4"
  );

  testInfoRankRowEl.innerHTML = `
            <div class="flex">
              <img src="${imageUrl}" alt="" 
                   class="w-[20px]">
              <p class="select-none 
                        text-[1.2rem] 
                        font-semibold
                        ml-4">${ranking.email}</p>
            </div>
            <div>
              <p class="select-none font-semibold">${ranking.score}</p>
            </div>
  `;

  return testInfoRankRowEl;
};

export default testInfoRankRow;
