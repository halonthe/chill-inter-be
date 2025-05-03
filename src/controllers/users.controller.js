import {} from "dotenv/config"; // Dotenv ES6 Modules
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
    return res.status(200).json({ code: 200, message: "success", data: users });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ code: 500, message: "Internal Server Error" });
  }
};

// get user by id
export const getUserById = async (req, res) => {
  const id = req.params.id;
  try {
    const users = await getUserByIdModel(id);
    return res.status(200).json({ code: 200, message: "success", data: users });
  } catch (error) {
    console.log(error);
    return res.status(204).json({ code: 204, message: "User Not Found!" });
  }
};

// add user
export const addUser = async (req, res) => {
  const { name, email, password } = req.body;
  const avatar_path = req.body || process.env.DEFAULT_AVATAR_PATH;

  if (!name || !email || !password) {
    return res
      .status(403)
      .json({ code: 403, message: "Input parameters were not provided" });
  }

  try {
    const users = await addUserModel(name, email, password, avatar_path);
    return res
      .status(201)
      .json({ code: 201, message: "user added successfull", data: users });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ code: 500, message: "Internal Server Error" });
  }
};

// update user
export const updateUser = async (req, res) => {
  const { name, email, password, avatar_path } = req.body;
  const updated_at = new Date();
  const id = req.params.id;

  if (!name || !email || !password) {
    return res
      .status(403)
      .json({ code: 403, message: "Input parameters were not provided" });
  }

  try {
    const users = await updateUserModel(
      name,
      email,
      password,
      avatar_path,
      updated_at,
      id
    );
    return res
      .status(201)
      .json({ code: 200, message: "user updated successfull", data: users });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ code: 500, message: "Internal Server Error" });
  }
};

// hard delete user
export const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const users = await deleteUserModel(id);
    return res
      .status(200)
      .json({ code: 200, message: "user deleted successfull", data: users });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ code: 500, message: "Internal Server Error" });
  }
};

// soft delete user
// export const deleteUser = async (req, res) => {
//   const deleted_at = new Date();
//   const id = req.params.id;

//   const users = await deleteUserModel(deleted_at, id);
//   return res.status(201).json({ status: "success", data: users });
// };
