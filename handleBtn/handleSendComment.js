import { createComment } from "../api/comments.js";
import testInfoComment from "../components/testInfoComment.js";
import getCurrentEmail from "../helper/getCurrentEmail.js";

const handleSendComment = async function (testId) {
  const currentEmail = getCurrentEmail();
  const inputCommentEl = document.getElementById("test-info__input-comment");
  const commentConent = inputCommentEl.value;

  const newComment = {
    email: currentEmail,
    content: commentConent,
    testId: testId,
  };

  const commentResponse = await createComment(newComment);

  inputCommentEl.value = ''

  const commentBlockEl = document.getElementById("test-info__container-comment");
  commentBlockEl.appendChild(testInfoComment(commentResponse));
};

export default handleSendComment;
