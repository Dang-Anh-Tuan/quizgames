export const render = function (element, root) {
  root.appendChild(element);
};

export const unmount = async function (element, root) {
  root.removeChild(element);
};
