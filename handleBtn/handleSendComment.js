import { createComment } from "../api/comments.js";
import testInfoComment from "../components/testInfoComment.js";
import getCurrentEmail from "../helper/getCurrentEmail.js";

const handleSendComment = async function (testId) {
  const currentEmail = getCurrentEmail();
  const inputCommentEl = document.getElementById("test-info__input-comment");
  const commentContent = inputCommentEl.value;

  const newComment = {
    email: currentEmail,
    content: commentContent,
    testId: testId,
    createdTime: new Date(),
  };

  const commentResponse = await createComment(newComment);

  inputCommentEl.value = "";

  const commentBlockEl = document.getElementById(
    "test-info__container-comment"
  );
  const commentItems = document.querySelectorAll(".comment-item");
  if (commentItems) {
    commentBlockEl.insertBefore(
      testInfoComment(commentResponse),
      commentBlockEl.firstChild
    );
  } else {
    commentBlockEl.appendChild(testInfoComment(commentResponse));
  }
};

export default handleSendComment;
