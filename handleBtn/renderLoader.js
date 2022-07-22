import loader from "../components/loader.js";
import { render } from "../core/core.js";

const renderLoader = function (root) {
  console.log("call");
  const loaderEl = loader();
  render(loaderEl, root);
  return loaderEl;
};

export default renderLoader;
