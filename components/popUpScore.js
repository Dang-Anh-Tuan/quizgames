const popUpScore = function (scoreUser, scoreOfTest, scorePass) {
  const popUpScoreEl = document.createElement("div");

  const imgSrc =
    scoreUser > scorePass
      ? "/static/images/cup.png"
      : "/static/images/failure.png";

  let message = ""

  if(scoreUser === scoreOfTest){
    message = "Excellent"
  }else if (scoreUser >= scorePass ){
    message = "Nice try ! Let's practice more "
  } else {
    message = "Let try again"
  }

  popUpScoreEl.innerHTML = `
   <div class="h-[100vh]
                w-full
                fixed
                bg-[rgba(0,0,0,0.3)]
                top-0
                left-0
                z-[1000]">
      <div class="absolute
                  flex
                  flex-col
                  justify-between
                  items-center
                  z-[1001]
                  w-[450px]
                  min-h-[380px]
                  bg-white
                  top-[45%]
                  left-[50%]
                  translate-x-[-50%]
                  translate-y-[-50%]
                  rounded-[25px]
                  px-6
                  py-10
                  dark:bg-dark-white-blur" >
          <img src="${imgSrc}" 
               alt="" 
               class="w-[100px]
                      ">
          <div class="text-center">
            <p class="text-[1.2rem] 
                      leading[1.4rem] 
                      font-medium 
                      text-primary 
                      select-none
                      dark:text-dark_primary">${message} </p>
            <p class="text-[1.2rem] 
                      leading[1.4rem] 
                      font-medium 
                      text-primary
                      select-none
                      dark:text-dark_primary">You get ${scoreUser} / ${scoreOfTest} points </p>
          </div>
          <div class="flex w-full justify-between mt-6">
            <button id="popup-result__back-list-test"
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
                            dark:bg-dark-gradient"  >Back to list test</button>
            <button id="popup-result__btn-close"
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
                      >Close</button>
          </div>
      </div>
    </div>
  `;

  return popUpScoreEl;
};

export default popUpScore;
