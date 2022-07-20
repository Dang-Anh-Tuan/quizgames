import testInfoComments from "./testInfoComments.js";
import testInfoRanking from "./testInfoRanking.js";

const testInfoSideBar = async function (currentTest) {
  const testInfoSideBarEl = document.createElement("div");

  testInfoSideBarEl.classList.add(
    "sticky",
    "shadow-2xl",
    "rounded-[25px]",
    "h-fit",
    "lg:w-[32%]",
    "top-[36px]",
    "mt-9",
    "right-0",
    "pb-[50px]",
    "min-h-[280px]",
    "mr-3",
    "ml-3"
  );

  testInfoSideBarEl.innerHTML = `
    <div class="relative
                    flex
                    justify-center
                    items-center
                    w-full
                    h-[68px]
                    bg-primary
                    mb-8
                    text-[1.4rem]
                    text-white
                    font-semibold
                    rounded-full
                    " >
              <div  id="info-test__btn-comment"
                    class="w-[50%]
                          h-full
                          rounded-full 
                          flex 
                          justify-center 
                          items-center
                          cursor-pointer
                          noSelect">
                  <div class="p-2">
                    <i class="fa-regular fa-comment"></i>
                  </div>
                  <p class="select-none
                  text-[1.2rem]
                  leading-[1.4rem]
                  font-semibold
                  mr-2
                  ">Comments</p>
              </div>
              <div  id="info-test__btn-ranking"
                    class="w-[50%]
                          h-full
                          rounded-full 
                          flex 
                          justify-center 
                          items-center
                          cursor-pointer
                          noSelect">
                <div class="p-2">
                  <i class="fa-solid fa-ranking-star"></i>
                </div>
                    <p class="select-none
                    text-[1.2rem]
                    leading-[1.4rem]
                    font-semibold
                    mr-2
                    ">Ranking</p>
              </div> 
              <div  id="test-info__after-maker"
                    class="absolute
                          w-[50%]
                          h-full
                          rounded-full
                          top-0
                          left-0
                        bg-[rgba(225,255,255,0.3)]
                          transition-all
                          duration-200
                          ease-linear
                          translate-x-[0]" >

              </div>  
              
        </div>
  `;

  testInfoSideBarEl.appendChild(await testInfoComments(currentTest.id));

  const rankingEl = await testInfoRanking(currentTest.id);
  testInfoSideBarEl.appendChild(rankingEl);

  return testInfoSideBarEl;
};

export default testInfoSideBar;
