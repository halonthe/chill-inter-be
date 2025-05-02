import {
  getUsersModel,
  addUserModel,
  getUserByIdModel,
  updateUserModel,
  deleteUserModel,
} from "../models/users.model.js";

// get all users
export const getUsers = async (req, res) => {
  try {
    const users = await getUsersModel();
    return res.status(200).json({ status: "success", data: users });
  } catch (error) {
    console.log(error);
  }
};

// get user by id
export const getUserById = async (req, res) => {
  const id = req.params.id;
  try {
    const users = await getUserByIdModel(id);
    return res.status(200).json({ status: "success", data: users });
  } catch (error) {
    console.log(error);
  }
};

// add user
export const addUser = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res
      .status(403)
      .json({ message: "Input parameters were not provided" });
  }

  const users = await addUserModel(username, email, password);
  return res.status(201).json({ status: "success", data: users });
};

// update user
export const updateUser = async (req, res) => {
  const { username, email, password } = req.body;
  const updated_at = new Date();
  const id = req.params.id;

  if (!username || !email || !password) {
    return res
      .status(403)
      .json({ message: "Input parameters were not provided" });
  }

  const users = await updateUserModel(
    username,
    email,
    password,
    updated_at,
    id
  );
  return res.status(201).json({ status: "success", data: users });
};

// hard delete user
export const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const users = await deleteUserModel(id);
    return res.status(200).json({ status: "success", data: users });
  } catch (error) {
    console.log(error);
  }
};

// soft delete user
// export const deleteUser = async (req, res) => {
//   const deleted_at = new Date();
//   const id = req.params.id;

//   const users = await deleteUserModel(deleted_at, id);
//   return res.status(201).json({ status: "success", data: users });
// };
