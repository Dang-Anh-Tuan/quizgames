import getCurrentName from "../helper/getCurrentName.js";

const navBar = function () {
  const navBarEl = document.createElement("div");

  navBarEl.innerHTML = `
    <header class="h-[68px] 
                   bg-primary-nav
                   fixed
                   w-full
                   z-[10000]">
      <div
        class="flex 
              justify-center
              items-center 
              max-w-[1200px] 
              m-auto 
              h-full
              xl:justify-between 
               "
      >
        <div  id="logo"
              class="h-[50px]  
                    items-center
                    hidden
                    xl:flex
                    cursor-pointer
                    "
                    
                    >
          <img src="./static/images/logo-squid.png" 
               alt="" 
               class="h-full" />
          <h3  class="
                     text-[1.6rem]
                     font-semibold
                     text-white
                     tracking-">QUIZGAMEs</h3>
        </div>
        <div class="relative cursor-pointer group xl:w-fit w-full text-center">
          <div class="flex items-center justify-center">
            <p class=" text-white text-[1.2rem]">Hi, ${getCurrentName()}</p>
            <div class=" text-white ml-2">
              <i class="fa-solid fa-caret-down"></i>
            </div>
          </div>
          
          <div class="hidden
                      absolute 
                      top-[calc(100%+19.5px)] 
                      right-0 
                      xl:right-[-24px]
                      bg-white 
                      shadow-lg 
                      rounded-br-[8px] 
                      rounded-bl-[8px] 
                      w-full
                      xl:w-[200px]
                      group-hover:block
                      after:absolute
                      after:contents['']
                      after:w-full
                      after:h-[20px]
                      after:bg-transparent
                      after:top-[-20px]
                      after:left-0
                      ">
            <div  id="btn-dark-mode"
            
                  class="flex
                        items-center
                        px-4 
                        py-3 
                        border-b-[1px] 
                        text-[1.1rem] 
                        hover:text-primary">
                      <p>Dark mode</p>
                      <div class="  flex
                                    items-center
                                    relative
                                    w-[50px] 
                                    h-[25px] 
                                    border-[2px] 
                                    border-gray-500
                                    rounded-full
                                    ml-3
                                    after:absolute
                                    after:w-[20px]
                                    after:h-[20px]
                                    after:rounded-full
                                    after:bg-gray-500
                                    after:translate-x-[2px]
                                    dark:border-[#2e9ce9]
                                    dark:after:bg-primary
                                    dark:after:translate-x-[calc(100%+4px)]
                                    transition-all
                                    duration-300
                                    ease-in-out

                      ">

                    </div>
                    </div>
            <button  id="btn-log-out"
                    class="px-4 
                           py-3
                           text-[1.1rem] 
                           hover:text-primary 
                           w-full text-left">Log out</button>
          </div>
        </div>
  
      </div>
    </header>
  `;

  return navBarEl;
};

export default navBar;
