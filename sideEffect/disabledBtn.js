const disabledBtn = function (btn) {
  btn.disabled = true;
  btn.classList.add("opacity-50");
  btn.classList.remove("hover:after:opacity-100", "hover:after:scale-x-100");
};

export default disabledBtn;
