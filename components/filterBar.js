const filterBar = function () {
  const filterBarEl = document.createElement("div");

  filterBarEl.classList.add(
    "pt-[120px]",
    "max-w-[1200px]",
    "m-auto",
    "h-8",
    "flex",
    "flex-col",
    "xl:flex-row",
    "justify-start",
    "items-center",
  );

  filterBarEl.innerHTML = `
  <div class="relative flex items-center h-[36px] mr-6 mb-5">
          <p class=" mr-4 font-normal text-[1.2rem] text-gray-400" >Level test  </p>
          <select name="" id="select-level" class="appearance-none
                                       pr-8
                                       pl-4
                                       py-2
                                       bg-white
                                       text-primary
                                       border-[2px]
                                       border-[#2e9ce9]
                                       rounded-[5px]
                                       outline-none
                                       dark:border-dark_primary
                                       dark:text-dark_primary
                                     " >
            <option class="block
                           pr-8
                           pl-4
                           py-2
                         bg-white 
                           text-primary 
                           border-primary 
                           dark:border-dark_primary
                         dark:text-dark_primary
                            outline-none
            "value="None" selected>None</option>
            <option class="block
                           pr-8
                           pl-4
                           py-2
                         bg-white 
                           text-primary 
                           border-primary 
                           dark:border-dark_primary
                         dark:text-dark_primary
                           outline-none
                           " value="Easy">Easy</option>
            <option class="block
                           pr-8
                           pl-4
                           py-2
                         bg-white 
                           text-primary 
                           border-primary 
                           dark:border-dark_primary
                         dark:text-dark_primary
                           outline-none
                           " value="Middle">Middle</option>
            <option class="block
                           pr-8
                           pl-4
                           py-2
                         bg-white 
                           text-primary 
                           border-primary
                           dark:border-dark_primary
                         dark:text-dark_primary 
                           outline-none
                           " value="Hard">Hard</option>
          </select>
          <div class="absolute text-primary right-3 dark:text-dark_primary">
            <i class="fa-solid fa-caret-down"></i>
          </div>
        </div>
        <div class="flex
                    items-center
                    h-[36px]
                    mb-5
                    "   >
          <input  id="search-input"
                 type="text"
                 class="appearance-none
                        w-[300px]
                        h-full
                        rounded-full
                        outline-none
                        px-4
                        py-2
                        border-gray-300 
                        border-[2px]
                      focus:border-primary
                      dark:border-dark_primary_light
                      dark:focus:border-dark_primary
                        "
                  placeholder="Search ...">
          <button   id="btn-search"
                    class="flex
                         justify-center
                         items-center
                         h-full
                         p-3
                         ml-2
                         rounded-full
                         bg-primary
                         text-white
                         hover:bg-[#76c2f8]
                         dark:bg-dark_primary
                         dark:hover:bg-dark_primary_light
                         group">
            <i class="fa-solid fa-magnifying-glass
                       "></i>
          </button>
        </div>
  `;

  return filterBarEl;
};

export default filterBar;
