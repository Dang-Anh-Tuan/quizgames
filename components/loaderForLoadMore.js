const loaderForLoadMore = function () {
  const loaderForLoadMoreEl = document.createElement("div");

  loaderForLoadMoreEl.classList.add(
    "max-w-[1200px]",
    "relative",
    "h-[200px]",
    "bg-white",
    "flex",
    "justify-center",
    "items-center",
    "z-[10000]",
    "left-0"
  );

  loaderForLoadMoreEl.innerHTML = `
    <div class="animate-spin
                  relative
                  w-[100px]
                  h-[100px]
                  bg-primary-loader
                  rounded-full
                  after:contents['']
                  after:w-[90px]
                  after:h-[90px]
                  after:bg-white
                  after:rounded-full
                  after:top-[50%]
                  after:left-[50%]
                  after:translate-x-[-50%]
                  after:translate-y-[-50%]
                  after:absolute">

      </div>   
  `;

  return loaderForLoadMoreEl;
};

export default loaderForLoadMore;
