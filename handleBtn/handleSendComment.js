import { createComment } from "../api/comments.js";
import testInfoComment from "../components/testInfoComment.js";

const handleSendComment = async function (testId) {
  const currentEmail = JSON.parse(localStorage.getItem("currentUser")).email;
  const inputCommentEl = document.getElementById("test-info__input-comment");
  const commentConent = inputCommentEl.value;

  const newComment = {
    email: currentEmail,
    content: commentConent,
    testId: testId,
  };

  const commentResponse = await createComment(newComment);

  inputCommentEl.value = ''

  const commentBlockEl = document.getElementById("container-comments");
  commentBlockEl.appendChild(testInfoComment(commentResponse));
};

export default handleSendComment;
