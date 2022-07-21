import {
  COMMENT_SORT_NEARLY_OPTION,
  ENTRYPOINT,
  REQUEST_OPTION,
} from "../constant/api.js";

export const getCommentsByTest = async function (testId, sortNearly = false) {
  const url = `${ENTRYPOINT}/comments?testId=${testId}`;

  sortNearly && url.concat(COMMENT_SORT_NEARLY_OPTION);

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
