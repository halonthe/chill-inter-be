import { Router } from "express";
import {
  addUser,
  deleteUser,
  getUserById,
  getUsers,
  updateUser,
} from "../controllers/users.controller.js";

const usersRoutes = Router();

// get all user
usersRoutes.get("/", getUsers);
// get user by id
usersRoutes.get("/:id", getUserById);
// add user
usersRoutes.post("/", addUser);
// edit user
usersRoutes.put("/:id", updateUser);
// hard delete user
usersRoutes.delete("/:id", deleteUser);
// soft delete user
// usersRoutes.put("/delete/:id", deleteUser);

export default usersRoutes;
