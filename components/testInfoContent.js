const testInfoContent = function (currentTest) {
  const testInfoContentEl = document.createElement("div");

  testInfoContentEl.classList.add(
    "lg:w-[66%]",
    "py-[36px]",
    "px-8",
    "bg-white",
    "bg-opacity-90",
    "shadow-2xl",
    "rounded-[25px]",
    "lg:mr-4",
    "mr-3",
    "ml-3",
    "dark:bg-dark-white-blur"
  );

  testInfoContentEl.innerHTML = `
  <h3 class="text-center
                   text-[2rem] 
                   leading-[2.2rem] 
                   font-semibold 
                   text-primary
                   dark:text-dark_primary">
                   ${currentTest.name}</h3>
        <div class="mt-[50px]">
        <div class="flex 
                      items-center 
                      font-semibold 
                      text-[1.2rem]
                      mb-4">
            <div class="flex 
                        justify-start 
                        w-[40px] 
                        text-primary
                        dark:text-dark_primary">
              <i class="fa-regular fa-circle-question"></i>
            </div>
            <p class="dark:text-dark_primary">Question : </p>
            <p class="ml-4 font-normal dark:text-dark_primary">${currentTest.questions.length}</p>
          </div>

           <div class="flex 
                      items-center 
                      font-semibold 
                      text-[1.2rem]
                      mb-4">
            <div class="flex 
                        justify-start 
                        w-[40px] 
                        text-primary
                        dark:text-dark_primary">
              <i class="fa-regular fa-clock"></i>
            </div>
            <p class="dark:text-dark_primary">Time : </p>
            <p class="ml-4 font-normal dark:text-dark_primary">${currentTest.timeAnswerMinute} minutes</p>
          </div>

           <div class="flex 
                      items-center 
                      font-semibold 
                      text-[1.2rem]
                      mb-4">
            <div class="flex 
                        justify-start 
                        w-[40px] 
                        text-primary
                        dark:text-dark_primary">
              <i class="fa-regular fa-circle-check"></i>
            </div>
            <p class="dark:text-dark_primary">Require score : </p>
            <p class="ml-4 font-normal dark:text-dark_primary">${currentTest.scorePass}</p>
          </div>
          <p class="text-[1.2rem] leading-[2rem] text-gray-500 font-light">${currentTest.shortDescription}</p>
        </div>

        <div class="flex
                    w-full
                    lg:w-[80%]
                    justify-around
                    m-auto
                    mt-[50px]
                    "   >
          <button   id="test-info__btn-start"
                    class="outline-none
                            relative
                            text-center 
                            min-w-[160px] 
                            h-[48px] 
                            px-4 
                            bg-primary-color 
                            m-auto rounded-full 
                            text-white 
                            text-[1.1rem] 
                            transition-all 
                            duration-300 
                            ease-linear
                            after:content-['']
                            after:absolute
                            after:top-0
                            after:right-0
                            after:w-full
                            after:h-full
                            after:bg-[rgba(255,255,255,0.3)]
                            after:rounded-full
                            after:scale-x-0
                            after:transition-all
                            after:duration-300
                            after:origin-center
                            after:opacity-0
                            hover:after:scale-x-100
                            hover:after:opacity-100
                            noSelect
                            dark:bg-dark-gradient"  >Start</button>
            <button id="info-test__btn-back"
                    class="outline-none
                          relative
                          text-center 
                          min-w-[160px] 
                          h-[48px] 
                          px-4 
                          border-[2px]
                          border-primary
                          text-primary
                          font-semibold
                          m-auto rounded-full 
                          text-[1.1rem] 
                          hover:after:scale-x-100
                          hover:after:opacity-100
                          hover:bg-primary-color 
                          hover:text-white
                          transition-all
                          duration-300
                          ease-in-out
                          noSelect
                          dark:border-dark_primary
                          dark:text-dark_primary
                          dark:hover:bg-dark-gradient
                          dark:hover:text-white" 
                      >Back</button>
  `;

  return testInfoContentEl;
};

export default testInfoContent;
