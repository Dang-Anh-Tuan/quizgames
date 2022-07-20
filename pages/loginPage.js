const loginPage = function () {
  const loginPageEl = document.createElement("div");

  loginPageEl.innerHTML = `
     <div
      class="h-[100vh] 
             relative
             flex 
             justify-center 
             items-center 
             bg-bg-login 
             bg-no-repeat 
             bg-center 
             bg-cover 
             after:content-[''] 
             after:bg-[rgba(0,0,0,0.5)]
             after:h-full 
             after:w-full 
             after:absolute 
             after:top-0 
             after:left-0
             after:z-10"
    >
      <div
        class="w-[380px] 
               min-h-[500px] 
             bg-[rgba(0,0,0,0.7)] 
               rounded-[30px] 
             shadow-gray-800 
               shadow-2xl z-20 p-8"
      >
        <p class="text-center 
                  text-[2rem] 
                text-white 
                  mb-[36px]">
          Welcome to Quizgaming
        </p>
        <p class="
                text-white 
                  mb-2
                  text-[1.2rem] 
                  ml-2" >
          Name :
        </p>
        <input
          id="input-name"
          type="text"
          class="appearance-none 
                 outline-none 
                 w-full 
                 h-[48px] 
                 rounded-[30px] 
                 px-6 
                 py-3
                 focus:shadow-input-focus
                 "
          placeholder="Enter your name ..."
        />
        <p  id="error-name"
            class="
                text-red-500 
                  mt-2
                  mb-2
                  text-[0.9rem] 
                  ml-2
                  " >
         
        </p>
        <p class="
        text-white 
          mb-2
          text-[1.2rem] 
          ml-2
          mt-4
          " >
         Email :
        </p>
        <input
          id="input-email"
          type="email"
          class="appearance-none 
                 outline-none 
                 w-full 
                 h-[48px] 
                 rounded-[30px] 
                 px-6 
                 py-3 
                 focus:shadow-input-focus"
          placeholder="Enter your email ... "
        />
        <p  id="error-email"
            class="
                text-red-500 
                  mt-2
                  mb-2
                  text-[0.9rem] 
                  ml-2
                  " >
         
        </p>
        <div class="flex 
                    justify-center 
                    mt-[50px]">
          <button
            id="btn-submit"
            class="outline-none
                   relative
                   text-center 
                   w-full 
                   h-[48px] 
                   px-4 
                   bg-primary-color 
                   m-auto rounded-full 
                   text-white 
                   text-[1.2rem] 
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
                   "
            
          >
            Start
          </button>
        </div>
      </div>
    </div>
  `;

  return loginPageEl;
};

export default loginPage;
