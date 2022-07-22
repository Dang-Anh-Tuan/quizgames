const infoAnswerHeading = function () {
  const infoAnswerHeadingEl = document.createElement("div");

  infoAnswerHeadingEl.classList.add(
    "flex",
    "justify-center",
    "items-center",
    "w-full",
    "h-[100px]",
    "bg-primary",
    "mb-8",
    "text-[1.4rem]",
    "text-white",
    "font-semibold",
    "rounded-tl-[25px]",
    "rounded-tr-[25px]",
    "dark:bg-dark-gradient"
  );

  infoAnswerHeadingEl.textContent = "Information";

  return infoAnswerHeadingEl;
};

export default infoAnswerHeading;
