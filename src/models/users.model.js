import { pool } from "../config/db.js";

// get all users
export const getUsersModel = async () => {
  try {
    const client = await pool.getConnection();
    const result = await client.query(`SELECT * FROM users`);
    return result[0];
  } catch (error) {
    console.log(error);
  }
};

// get user by id
export const getUserByIdModel = async (id) => {
  try {
    const client = await pool.getConnection();
    const result = await client.query(`SELECT * FROM users WHERE id = ?`, [id]);
    return result[0];
  } catch (error) {
    console.log(error);
  }
};

// add user
export const addUserModel = async (name, email, password, avatar_path) => {
  try {
    const client = await pool.getConnection();
    const result = await client.query(
      `INSERT INTO users (name,email,password,avatar_path) VALUE(?,?,?,?)`,
      [name, email, password, avatar_path]
    );
    return result;
  } catch (error) {
    console.log(error);
  }
};

// update user
export const updateUserModel = async (
  name,
  email,
  password,
  avatar_path,
  updated_at,
  id
) => {
  try {
    const client = await pool.getConnection();
    const result = await client.query(
      `UPDATE users SET name = ?, email = ?, password = ?, avatar_path = ?, updated_at = ? WHERE id = ?`,
      [name, email, password, avatar_path, updated_at, id]
    );
    return result;
  } catch (error) {
    console.log(error);
  }
};

// hard delete user
export const deleteUserModel = async (id) => {
  try {
    const client = await pool.getConnection();
    const result = await client.query(`DELETE FROM users WHERE id = ?`, [id]);
    return result;
  } catch (error) {
    console.log(error);
  }
};

// soft delete user
// export const deleteUserModel = async (deleted_at, id) => {
//   try {
//     const client = await pool.getConnection();
//     const result = await client.query(
//       `UPDATE users SET deleted_at = ? WHERE id = ?`,
//       [deleted_at, id]
//     );
//     return result;
//   } catch (error) {
//     console.log(error);
//   }
// };
