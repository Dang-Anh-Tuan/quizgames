import { ENTRYPOINT, REQUEST_OPTION } from "../constant/api.js";

export const getAllTests = async function () {
  const url = `${ENTRYPOINT}/tests`;
  const response = await fetch(url);
  const tests = await response.json();
  return tests
};

export const getTestById = async function(id){
  const url = `${ENTRYPOINT}/tests/${id}`;
  const response = await fetch(url);
  const test = await response.json();
  return test
}