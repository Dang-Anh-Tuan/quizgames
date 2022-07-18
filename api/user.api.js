import { ENTRYPOINT, REQUEST_OPTION } from "../constant/api.js";

export const getAllUser = async function () {
  const url = `${ENTRYPOINT}/users`;
  const response = await fetch(url);
  const users = await response.json();

  return users;
};

export const createUser = async function (user) {
  const url = `${ENTRYPOINT}/users`;
  const response = await fetch(url, {
    method: "POST",
    headers: REQUEST_OPTION,
    body: JSON.stringify(user),
  });
  const newUser = await response.json();

  return newUser;
};
