const infoAnswerButtonSubmit = function () {
  const containerButton = document.createElement("div");

  containerButton.classList.add(
    "flex",
    "justify-center",
    "items-center",
    "w-full",
    "mt-[50px]"
  );

  containerButton.innerHTML = `
    <button id="btn-submit-test"
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
                      after:scale-x-0
                      after:transition-all
                      after:duration-300
                      after:origin-center
                      after:opacity-0
                      hover:after:scale-x-100
                      hover:after:opacity-100
                      noSelect" 
                      >Submit</button>
  `;

  return containerButton;
};

export default infoAnswerButtonSubmit;
