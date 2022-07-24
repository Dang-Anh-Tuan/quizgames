const testItem = function ({id, thumb, name, level}) {
  const testItemEl = document.createElement("div");

  const colorTag = {
    "Easy" : "#2ee94d",
    "Middle" : "#2e9ce9",
    "Hard" : "#ff7200"
  }

  testItemEl.innerHTML = `
      <div id="${id}"
           class="relative
                  test-item
                  h-[300px] 
                  shadow-2xl 
                  rounded-[20px]
                  cursor-pointer
                  opacity-0
                  group
                  noSelect
                  dark:bg-dark-white-blur
                  animate-[fadeUp_0.5s_ease-in-out_0.3s_forwards]
                  ">
        <div class="overflow-hidden 
                    relative
                    w-full 
                    h-[200px]
                    rounded-tl-[20px] 
                    rounded-tr-[20px]
                    after:content-['']
                    after:absolute
                    after:w-full
                    after:h-full
                    after:top-0
                    after:left-0
                    after:bg-[rgba(255,255,255,0.2)]
                    after:blur-md
                    after:z-10
                    after:opacity-0
                    after:group-hover:opacity-100
                    ">
          <img
            src="${thumb}"
            class="object-fit
                   w-full
                   h-[200px] 
                   transition-all
                   duration-300
                   group-hover:scale-125
                   "
          />
        </div>
        <div class="ml-4 mt-4 w-[80%] ">
          <h3 class="leading-[1.4rem] 
                     font-[1.2rem] 
                     font-semibold 
                     wrap-text
                     dark:text-white
                    ">
            ${name}
          </h3>
        </div>
        <div class="flex
                    items-center
                    justify-center
                    text-white
                    font-medium
                    select-none
                    absolute
                    w-[60px]
                    h-[44px]
                    top-[0px]
                    left-4
                    z-[11]
                    
                    " data-color="${colorTag[level]}" style="background-color: ${colorTag[level]};">
            ${level}
        </div>
        <div class="tag-level-after left-4" style="border-color:${colorTag[level]} transparent transparent transparent;">
      </div>
  `;
  return testItemEl;
};

export default testItem;
