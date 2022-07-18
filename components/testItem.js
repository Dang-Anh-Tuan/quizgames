const testItem = function(id, image, testName){
  const testItemEl = document.createElement('div')

  testItemEl.innerHTML = `
      <div id="${id}"
           class="test-item
                  h-[300px] 
                  shadow-2xl 
                  rounded-[20px]
                  cursor-pointer
                  group
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
            src="${image}"
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
                    ">
            ${testName}
          </h3>
        </div>
      </div>
  `
  return testItemEl;
}

export default testItem;