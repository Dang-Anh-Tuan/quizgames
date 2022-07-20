const popUpQuitTest = function (scoreUser, scoreOfTest) {
  const popUpQuitTestEl = document.createElement("div");

  popUpQuitTestEl.innerHTML = `
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
                  justify-center
                  items-center
                  z-[1001]
                  w-[450px]
                  min-h-[200px]
                  bg-white
                  top-[45%]
                  left-[50%]
                  translate-x-[-50%]
                  translate-y-[-50%]
                  rounded-[25px]
                  px-6
                  py-10" >
          <div class="text-center">
            <p class="text-[1.2rem] 
                      leading[1.4rem] 
                      font-medium 
                      text-primary
                      select-none">Do you want to quit ?</p>
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
                            hover:after:opacity-100"  >Back to list test</button>
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
                          ease-in-out" 
                      >Close</button>
          </div>
      </div>
    </div>
  `;

  return popUpQuitTestEl;
};

export default popUpQuitTest;
