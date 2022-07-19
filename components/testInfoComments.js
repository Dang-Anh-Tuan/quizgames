import { getCommentsByTest } from "../api/comments.js";
import testInfoComment from "./testInfoComment.js";

const testInfoComments = async function (testId) {
  const comments = await getCommentsByTest(testId);

  const testInfoCommentsEl = document.createElement("div");

  testInfoCommentsEl.setAttribute("id", "container-comments");
  testInfoCommentsEl.classList.add("px-4", "z-10");

  testInfoCommentsEl.innerHTML = `
    <div class="flex mb-4 gap-2 h-[36px]">
            <input  id="test-info__input-comment"
                    type="text" class="appearance-none 
                                      outline-none 
                                      px-6 
                                      py-2 
                                      flex-1 
                                      rounded-full 
                                      border-[2px] 
                                      border-gray-300 
                                      focus:border-primary
                                      h-full"
                    placeholder="Enter comment ...">
            <button id="test-info__btn-send_comment"
            class="outline-none
            relative
            text-center 
            h-full
            px-4
            border-[2px]
            border-primary
            text-primary
            font-semibold
            m-auto rounded-full 
            text-[1.1rem] 
            hover:after:scale-x-100
            hover:after:opacity-100
            hover:bg-primary-color 
            hover:text-white
            transition-all
            duration-300
            ease-in-out">Send</button>
          </div>
  `;

  comments.forEach((comment) =>
    testInfoCommentsEl.appendChild(testInfoComment(comment))
  );

  return testInfoCommentsEl;
};

export default testInfoComments;
