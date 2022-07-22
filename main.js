import loader from "./components/loader.js";
import { render, unmount } from "./core/core.js";
import initialApp from "./handleBtn/initialApp.js";

async function main() {
  const root = document.getElementById("container");

  try {
    const loaderEl = loader();
    render(loaderEl, root)
    window.onload = async function () {
      await initialApp(root);
      await unmount(loaderEl, root)
    };
  } catch {}
}

main();
