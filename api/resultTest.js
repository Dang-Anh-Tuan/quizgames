import { ENTRYPOINT, REQUEST_OPTION } from "../constant/api.js";

export const getTop3ByTest = async function (testId) {
  const url = `${ENTRYPOINT}/result-test?test=${testId}&_sort=score&_order=desc&_limit=3`;

  const response = await fetch(url);
  const result = await response.json();

  return result;
};
