const infoTextRow = function (label, value, isImportant = false) {
  const containerRow = document.createElement("div");

  containerRow.classList.add("flex", "mb-6");

  if (isImportant) containerRow.classList.add("timer");

  containerRow.innerHTML = `
      <p class="text-[1.2rem] 
                leading-[1.6rem] 
                text-primary 
                font-semibold">
      ${label}: </p>
      <p class="text-[1.2rem] 
                leading-[1.6rem]   
                ml-2 
                truncate 
                ${
                  isImportant
                    ? "text-red-400 font-semibold"
                    : "text-gray-800 font-normal"
                }">
      ${value}</p>
  `;

  return containerRow;
};

export default infoTextRow;
