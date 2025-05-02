import { createPool } from "mysql2/promise";
import {} from "dotenv/config"; // Dotenv ES6 Modules

const pool = createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

const connectToDatabase = async () => {
  try {
    await pool.getConnection();
  } catch (error) {
    console.log(error);
  }
};

export { connectToDatabase, pool };
