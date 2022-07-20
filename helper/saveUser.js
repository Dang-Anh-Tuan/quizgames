import { createUser, getAllUser } from "../api/user.api.js";

const saveUser = async function (newName, newEmail) {
  const users = await getAllUser();
  let newUser = null;

  const regexName = /^[A-Za-z]+$/g;
  const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  if (!newName.match(regexName) || !newEmail.match(regexEmail)) {
    return newUser
  } else {
    let checkExist = false;
    users.forEach((user) => {
      if (user.email === newEmail) {
        newUser = user;
        checkExist = true;
      }
    });
    if (!checkExist) {
      newUser = await createUser({ name: newName, email: newEmail });
    }
  }

  return newUser;
};

export default saveUser;
