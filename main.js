import initialApp from "./handleBtn/initialApp.js";

async function main() {
  const root = document.getElementById("container");

  try {
    await initialApp(root);
  } catch {}
}

main();
