import testItem from "./testItem.js";

const listTest = function (listTestData) {
  const containerListTestEl = document.createElement("div");

  containerListTestEl.classList.add(
    "max-w-[1200px]",
    "m-auto",
    "grid",
    "gap-x-[35px]",
    "gap-y-5",
    "py-[50px]",
    "px-[50px]",
    "grid-rows-1",
    "md:grid-cols-2",
    "lg:grid-cols-3",
    "xl:grid-cols-4",
    "xl:px-0"
  );

  listTestData.forEach((item) => {
    const testItemEl = testItem(item.id, item.thumb, item.name);
    containerListTestEl.append(testItemEl);
  });

 

  return containerListTestEl;
};

export default listTest;
