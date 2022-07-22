const btnLoadMore = function () {
  const btnLoadMoreEl = document.createElement("div");

  btnLoadMoreEl.classList.add(
    "flex",
    "w-full",
    "py-8",
    "justify-center",
    "items-center"
  );

  btnLoadMoreEl.innerHTML = `
     <button   id="list-test__btn-load"
                class="outline-none
                      relative
                      text-center 
                      min-w-[200px] 
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
                      after:scale-x-[0.2]
                      after:opacity-0
                      after:transition-all
                      after:duration-300
                      after:origin-center
                      hover:after:scale-x-100
                      hover:after:opacity-100
                      dark:bg-dark-gradient
                      " >Load More</button>
  `;

  return btnLoadMoreEl;
};

export default btnLoadMore;
