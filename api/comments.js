import { ENTRYPOINT, REQUEST_OPTION } from "../constant/api.js";

export const getCommentsByTest = async function (testId) {
  const url = `${ENTRYPOINT}/comments?testId=${testId}`;

  const response = await fetch(url);
  const comments = await response.json();

  return comments;
};

export const createComment = async function (comment) {
  const url = `${ENTRYPOINT}/comments`;

  const response = await fetch(url, {
    headers: REQUEST_OPTION,
    method: "POST",
    body: JSON.stringify(comment),
  });
  const newComment = await response.json();

  return newComment;
};
