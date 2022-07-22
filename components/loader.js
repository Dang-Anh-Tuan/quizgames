const loader = function () {
  const loaderEl = document.createElement("div");

  loaderEl.classList.add(
    "w-full",
    "fixed",
    "h-[100vh]",
    "bg-white",
    "flex",
    "justify-center",
    "items-center",
    "z-[10000]",
    "left-0"
  );

  loaderEl.innerHTML = `
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

  return loaderEl;
};

export default loader;
