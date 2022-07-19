const testInfoComment = function (comment) {
  const testInfoCommentEl = document.createElement("div");

  testInfoCommentEl.innerHTML = `
    <div class="bg-gray-200 py-2 px-6 rounded-[25px] mb-4 w-fit">
            <p class="select-none font-semibold text-[1.1rem]">
              ${comment.email}
            </p>
            <p class="leading-[1.4rem]">${comment.content}</p>
          </div>
  `

  return testInfoCommentEl;
};

export default testInfoComment;
