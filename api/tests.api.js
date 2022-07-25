import { ENTRYPOINT } from "../constant/api.js";
import { AMOUNT_TEST_PER_PAGE } from "../constant/pagination.js";

export const getAllTests = async function (options = null) {
  let url = `${ENTRYPOINT}/tests?`;

  if (options.page !== undefined) {
    options.start = (options.page - 1) * AMOUNT_TEST_PER_PAGE;
    options.end = options.page * AMOUNT_TEST_PER_PAGE;
  }

  if (options.start !== null) {
    url = url.concat("&_start=", options.start);
  }
  if (options.end) {
    url = url.concat("&_end=", options.end);
  }
  if (options.search) {
    url = url.concat("&", options.search.field, "_like=", options.search.keyword);
  }
  if (options.level !== 'None' && options.level !== undefined) {
    url = url.concat("&level=",options.level);
  }

  const response = await fetch(url);
  const tests = await response.json();
  return tests;
};

export const getTestById = async function (id) {
  const url = `${ENTRYPOINT}/tests/${id}`;
  const response = await fetch(url);
  const test = await response.json();
  return test;
};
