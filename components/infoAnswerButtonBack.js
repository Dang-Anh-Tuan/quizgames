const infoAnswerButtonBack = function () {
  const containerButton = document.createElement("div");

  containerButton.classList.add(
    "flex",
    "justify-center",
    "items-center",
    "w-full",
    "mt-[24px]"
  );

  containerButton.innerHTML = `
    <button id="info-test__btn-back"
            class="outline-none
            relative
            text-center 
            min-w-[200px] 
            h-[48px] 
            px-4 
            border-[2px]
            border-primary
            text-primary
            font-semibold
            m-auto rounded-full 
            text-[1.2rem] 
            hover:after:scale-x-100
            hover:after:opacity-100
            hover:bg-primary-color 
            hover:text-white
            transition-all
            duration-300
            ease-in-out
            noSelect" 
                      >Back</button>
  `;

  return containerButton;
};

export default infoAnswerButtonBack;
