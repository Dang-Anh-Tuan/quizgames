const navBar = function () {
  const navBarEl = document.createElement("div");

  navBarEl.innerHTML = `
    <header class="h-[68px] 
                   bg-primary-nav">
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
        <div class="h-[50px]  
                    items-center
                    hidden
                    xl:flex
                    "
                    >
          <img src="./static/images/logo-squid.png" 
               alt="" 
               class="h-full" />
          <h3  class="ml-2
                     text-[1.6rem]
                     font-semibold
                     text-white
                     tracking-">QUIZGAMEs</h3>
        </div>
        <div class="flex
                    items-center
                    h-[36px]
                    "   >
          <input type="text"
                 class="appearance-none
                        w-[300px]
                        h-full
                        rounded-full
                        outline-none
                        px-4
                        "
                  placeholder="Search ...">
          <button class="flex
                         justify-center
                         items-center
                         h-full
                         p-3
                         ml-2
                         rounded-full
                         bg-white
                         group">
            <i class="fa-solid fa-magnifying-glass
                      group-hover:text-primary"></i>
          </button>
        </div>
      </div>
    </header>
  `;

  return navBarEl;
};

export default navBar;
