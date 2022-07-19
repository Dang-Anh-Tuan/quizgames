import { createUser, getAllUser } from "../api/user.api.js";

const saveUser = async function (inputName, inputEmail) {
  const users = await getAllUser();
  let newUser = null;

  const newName = inputName.value;
  const newEmail = inputEmail.value;

  const regexName = /^[A-Za-z]+$/g;
  const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  const errorMsg = {
    name: null,
    email: null,
  };

  if (!newName.match(regexName)) {
    errorMsg.name = "Name must include character a-z";
  }

  if (!newEmail.match(regexEmail)) {
    errorMsg.email = "Email is not valid";
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

  return { newUser, errorMsg };
};

export default saveUser;
